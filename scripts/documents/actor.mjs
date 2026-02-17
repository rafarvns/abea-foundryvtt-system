/**
 * Extend the base Actor document for the ABEA system.
 * @extends {Actor}
 */
export class AbeaActor extends Actor {

    /** @override */
    prepareData() {
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
        super.prepareBaseData();
    }

    /** @override */
    prepareDerivedData() {
        super.prepareDerivedData();
        const system = this.system;

        // Calculate Réis (total currency value)
        system.currency.value = (system.currency.gold * 1000) +
            (system.currency.silver * 100) +
            (system.currency.bronze * 10);

        // Calculate Max Resistance (Base 10 + Bonus)
        system.attributes.condition.resistanceMax = 10 + (system.attributes.condition.resistanceMaxBonus || 0);
    }

    /**
     * Apply damage to the actor following ABEA rules.
     * @param {number} damage 
     */
    async applyDamage(damage) {
        const system = this.system;
        const type = this.type; // "character" or "npc"
        const currentRes = system.attributes.condition.resistance || 0;
        const maxRes = system.attributes.condition.resistanceMax;

        let newRes = currentRes + damage;
        let updates = {};
        let statusEffects = [];

        if (type === "npc") {
            updates["system.attributes.condition.resistance"] = newRes;
            if (newRes >= maxRes) {
                statusEffects.push("dead");
            }
        } else {
            // Character Rules
            if (newRes >= maxRes) {
                const overflow = newRes - maxRes;
                updates["system.attributes.condition.resistance"] = maxRes;

                // Accumulate Critical points from overflow
                if (overflow > 0) {
                    const currentCrit = system.attributes.condition.critical || 0;
                    const newCrit = Math.min(5, currentCrit + overflow);
                    updates["system.attributes.condition.critical"] = newCrit;

                    if (newCrit >= 5) {
                        statusEffects.push("dead");
                    } else {
                        statusEffects.push("unconscious");
                    }
                } else {
                    statusEffects.push("unconscious");
                }
            } else {
                updates["system.attributes.condition.resistance"] = newRes;
            }
        }

        console.log("ABEA | ApplyDamage Debug:", { damage, currentRes, maxRes, newRes, updates, statusEffects });

        // Apply Updates
        await this.update(updates);

        // Apply Status Effects
        for (let effectId of statusEffects) {
            const hasEffect = this.effects.some(e => e.getFlag("core", "statusId") === effectId);
            if (!hasEffect) {
                await this.toggleStatusEffect(effectId, { active: true, overlay: effectId === "dead" });
            }
        }

        return { updates, statusEffects };
    }
    /**
     * Roll a Skill (Feat/Façanha)
     * Formula: 3d6 + (Rank * 3)
     * Critical: 3x6
     * Fumble: 3x1
     * @param {string} skillName 
     */
    async rollSkill(skillName, options = { chatMessage: true }) {
        const skillIndex = this.system.skills.findIndex(s => s.name === skillName);

        let roll;
        let skill = null;
        let rank = 0;
        let bonus = 0;

        if (skillIndex !== -1) {
            skill = this.system.skills[skillIndex];
            rank = Number(skill.rank) || 0;
            bonus = rank * 3;
        } else {
            // Allow rolling without the skill (Level Zero or generic)
            // Default to just 3d6 if skill not found? 
            // Logic: Check if it's a known skill but not on actor vs completely unknown.
            // For now, if not found, we roll flat 3d6 (Level 0 equivalent if allowed, or just attribute check)
            // But warning is good.
            // ui.notifications.warn(`ABEA: Façanha "${skillName}" não encontrada. Rolando 3d6 puro.`);
        }

        // Create the roll
        roll = new Roll("3d6 + @bonus", { bonus });
        await roll.evaluate();

        // Analyze dice for Criticals/Fumbles
        const dice = roll.terms[0].results.map(r => r.result);
        const isCritical = dice.every(d => d === 6);
        const isFumble = dice.every(d => d === 1);

        if (!options.chatMessage) {
            return {
                roll,
                total: roll.total,
                isCritical,
                isFumble,
                skill,
                bonus
            };
        }

        if (skillIndex === -1) return ui.notifications.warn(`ABEA: Façanha "${skillName}" não encontrada.`);

        let flavor = `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                        <img src="${skill.img}" width="36" height="36" style="border: none; margin-bottom: 6px;" />
                        <h4 style="font-size: 1.2rem; margin: 0;">Façanha: <strong>${skillName}</strong></h4>
                      </div><hr> `;
        if (isCritical) {
            flavor += `<br><span style="color:green; font-weight:bold;">SUCESSO CRÍTICO! (Façanha)</span>`;
        } else if (isFumble) {
            flavor += `<br><span style="color:red; font-weight:bold;">FALHA CRÍTICA!</span>`;
        }

        // Send to Chat
        roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            flavor: flavor
        });
    }
    /**
     * Roll a Weapon Attack
     * Formula: 3d6 + (Skill Rank * 3) - Target Active Defense
     * Hit Condition: Result >= 12
     * @param {string} itemId 
     */
    async rollWeaponAttack(itemId) {
        const weapon = this.items.get(itemId);
        if (!weapon || weapon.type !== "weapon") return ui.notifications.warn("ABEA: Arma não encontrada.");

        // 1. Skill Bonus
        let skillType = weapon.system.skillType;
        let skillBonus = 0;
        let skillName = "Sem Façanha";

        // Resolve UUID if present
        if (skillType) {
            const resolvedSkill = await fromUuid(skillType).catch(() => null);
            if (resolvedSkill) {
                skillType = resolvedSkill.name;
            }
        }

        if (skillType) {
            // Find skill by name (flexible matching)
            const skill = this.system.skills.find(s => s.name.trim().toLowerCase() === skillType.trim().toLowerCase());
            if (skill) {
                const rank = Number(skill.rank) || 0;
                skillBonus = rank * 3;
                skillName = `${skill.name} (Rank ${rank})`;
            }
        }

        // 2. Targeting & Defense
        const targets = Array.from(game.user.targets);
        let targetDefense = 0;
        let targetActor = null;

        if (targets.length > 0) {
            targetActor = targets[0].actor;
            targetDefense = targetActor?.system?.attributes?.defense?.active || 0;
        }

        // 3. Roll Formula
        // 3d6 + SkillBonus - TargetDefense
        let formula = "3d6";
        if (skillBonus) formula += ` + ${skillBonus}`;
        if (targetDefense) formula += ` - ${targetDefense}`;

        const roll = new Roll(formula);
        await roll.evaluate();

        const total = roll.total;

        // Use global helper for "Easy" difficulty (12)
        const façanha = game.abea.checkFacanha(total, "easy"); // 12
        const isHit = façanha.success;

        const damage = Number(weapon.system.damage) || 0;

        // 4. Chat Message Flavor
        let flavor = `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                        <img src="${weapon.img}" width="36" height="36" style="border: none; margin-bottom: 6px;" />
                        <h4 style="font-size: 1.2rem; margin: 0;">Ataque: <strong>${weapon.name}</strong></h4>
                      </div>`;
        flavor += `<div style="font-size: 0.9rem; margin-bottom: 5px;">Façanha: ${skillName}</div>`;

        if (targetActor) {
            flavor += `<div style="font-size: 0.9rem;">Alvo: <strong>${targetActor.name}</strong> (Defesa: ${targetDefense})</div>`;
        }

        flavor += `<hr>`;

        if (isHit) {
            flavor += `<div style="color:green; font-weight:bold; font-size: 1.1rem; text-align:center;">ACERTOU! (Total: ${total})</div>`;
            flavor += `<div style="text-align:center; font-size: 0.8rem;">(Meta: ${façanha.target}+)</div>`;
            flavor += `<div style="text-align:center;">Dano: <strong>${damage}</strong></div>`;
        } else {
            flavor += `<div style="color:red; font-weight:bold; font-size: 1.1rem; text-align:center;">ERROU! (Total: ${total})</div>`;
            flavor += `<div style="text-align:center; font-size: 0.8rem;">(Meta: ${façanha.target}+)</div>`;
        }

        // 5. Apply Damage (Automation)
        if (isHit && targetActor && damage > 0) {
            if (targetActor.isOwner) {
                await targetActor.applyDamage(damage);
                flavor += `<div style="margin-top:5px; font-style:italic; font-size:0.8rem; text-align:center;">Dano aplicado conforme as regras.</div>`;
            } else {
                // Emit socket event for GM to apply damage
                game.socket.emit("system.abea", {
                    type: "applyDamage",
                    data: {
                        uuid: targetActor.uuid,
                        damage: damage
                    }
                });
                flavor += `<div style="margin-top:5px; font-style:italic; font-size:0.8rem; text-align:center;">Solicitação de dano enviada ao Mestre.</div>`;
            }
        }

        roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            flavor: flavor
        });
    }
}
