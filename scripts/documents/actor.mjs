import {
    applyCombatBonuses, bestCombatRank, combatRoundKey, computeDefense, distanceInVaras, effectiveRank, energyMax,
    getSkillRank, isWounded, learningCost, normalizeName, powerLinesFor, rangeBand, resistanceSkillBonus,
    weaponSkillName, weaponUsage
} from "../helpers/rules.mjs";
import { ABEA } from "../config.mjs";

const { renderTemplate } = foundry.applications.handlebars;
const { DialogV2 } = foundry.applications.api;

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

        const condition = system.attributes.condition;
        if (this.type === "character") {
            // Characters: base 10 + skills at the listed levels + manual bonus (potions etc.), up to 15
            condition.resistanceAuto = resistanceSkillBonus(system);
            condition.resistanceMax = Math.min(ABEA.resistance.limit,
                ABEA.resistance.base + condition.resistanceAuto + (condition.resistanceMaxBonus || 0));

            // Defense and energy come from equipment and skills
            const defense = computeDefense(this);
            system.attributes.defense.passive = defense.passive;
            system.attributes.defense.active = defense.active;
            system.attributes.defense.breakdown = defense.breakdown;
            system.attributes.energy.max = energyMax(system);
        } else {
            // NPCs: Direct Value (stored in bonus field for now to avoid data migration)
            condition.resistanceAuto = 0;
            condition.resistanceMax = (condition.resistanceMaxBonus || 0);
        }
        condition.wounded = isWounded(system);

        // Defender-se / Esquivar-se of the current round (characters and NPCs)
        applyCombatBonuses(this);
    }

    /**
     * Learning points (p. 16): raising a skill spends points and is blocked without enough of them;
     * lowering or removing a skill refunds them. Works for every path that changes the skill list.
     * @override
     */
    async _preUpdate(changed, options, user) {
        const allowed = await super._preUpdate(changed, options, user);
        if (allowed === false) return false;
        if ((this.type !== "character") || options.abeaIgnoreLearning) return;

        const skills = foundry.utils.getProperty(changed, "system.skills");
        if (!skills) return;
        const delta = learningCost(Array.isArray(skills) ? skills : Object.values(skills))
            - learningCost(this._source.system.skills);
        if (!delta) return;

        const changedPoints = foundry.utils.getProperty(changed, "system.attributes.skillPoints");
        const points = Number(changedPoints ?? this._source.system.attributes.skillPoints) || 0;
        if (delta > points) {
            ui.notifications.warn(game.i18n.format("ABEA.Learning.NotEnough", { needed: delta, available: points }));
            this.sheet?.render();
            return false;
        }
        foundry.utils.setProperty(changed, "system.attributes.skillPoints", points - delta);
    }

    /** @override */
    async _onUpdate(changed, options, userId) {
        await super._onUpdate(changed, options, userId);
        if (game.user.id !== userId) return;

        // Check if resistance was updated for NPCs
        if (this.type === "npc" && foundry.utils.hasProperty(changed, "system.attributes.condition.resistance")) {
            console.log("ABEA | Detecada alteração de resistência em NPC via _onUpdate");
            await this._checkNpcDeathCondition();
        }
    }

    /**
     * Checks if the NPC should be dead based on resistance.
     */
    async _checkNpcDeathCondition() {
        const resistance = Number(this.system.attributes.condition.resistance) || 0;
        const maxResistance = Number(this.system.attributes.condition.resistanceMax) || 0;

        const isDead = this.statuses.has("dead");

        console.log(`ABEA | Checando Morte NPC: Res ${resistance}/${maxResistance} | Morto? ${isDead}`);

        if (resistance >= maxResistance && !isDead) {
            console.log("ABEA | Aplicando condição Morto");
            await this.toggleStatusEffect("dead", { active: true, overlay: true });
        } else if (resistance < maxResistance && isDead) {
            console.log("ABEA | Removendo condição Morto");
            await this.toggleStatusEffect("dead", { active: false });
        }
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
            if (!this.statuses.has(effectId)) {
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

        if (skillIndex !== -1) {
            skill = this.system.skills[skillIndex];
            rank = Number(skill.rank) || 0;
        } else {
            // Allow rolling without the skill (Level Zero or generic)
            // Default to just 3d6 if skill not found? 
            // Logic: Check if it's a known skill but not on actor vs completely unknown.
            // For now, if not found, we roll flat 3d6 (Level 0 equivalent if allowed, or just attribute check)
            // But warning is good.
            // ui.notifications.warn(`ABEA: Façanha "${skillName}" não encontrada. Rolando 3d6 puro.`);
        }

        // Badly hurt characters lose one skill level in every test (p. 37)
        const wounded = this.system.attributes.condition.wounded;
        const bonus = effectiveRank(this.system, rank) * 3;

        // Supernatural powers: choose the power level, which sets the difficulty and energy cost (p. 47)
        let power = null;
        if (options.chatMessage && (skillIndex !== -1)) {
            const lines = powerLinesFor(this.system, skillName);
            if (lines.length) {
                power = await this.#preparePower(skillName, rank, lines);
                if (!power) return;
            }
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
                bonus,
                wounded
            };
        }

        if (skillIndex === -1) return ui.notifications.warn(`ABEA: Façanha "${skillName}" não encontrada.`);

        // Send to Chat (custom content replaces the default roll display, so the roll HTML goes inside the card)
        const content = await renderTemplate("systems/abea/templates/chat/roll-card.hbs", {
            name: skillName,
            img: skill.img,
            hasSkill: true,
            rank,
            bonus,
            wounded,
            power,
            difficulty: power ? { label: power.label, cd: power.target } : null,
            passed: power ? (roll.total >= power.target) && !isFumble : null,
            total: roll.total,
            isCritical,
            isFumble,
            rollHTML: await roll.render()
        });
        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            content
        });
    }
    /**
     * Ask which level of a supernatural power to use and spend its energy.
     * @param {string} skillName
     * @param {number} rank                 The actor's level in the power
     * @param {object[]} lines              Supernatural lines this power belongs to (see powerLinesFor)
     * @returns {Promise<object|null>}      Chosen level data, or null if cancelled or not allowed
     */
    async #preparePower(skillName, rank, lines) {
        // No power can go above the level of its base skill (Fé, Fôlego or Ifá)
        const baseRank = Math.max(...lines.map(line => line.baseRank));
        const maxLevel = Math.min(rank, baseRank, 3);
        if (maxLevel < 1) {
            ui.notifications.warn(game.i18n.format("ABEA.Power.NeedsBase", {
                power: skillName,
                base: lines.map(line => line.base).join(" / ")
            }));
            return null;
        }

        const energy = Number(this.system.attributes.energy.value) || 0;
        const buttons = [];
        for (let level = 1; level <= maxLevel; level++) {
            const { difficulty, cost } = ABEA.powers.levels[level];
            buttons.push({
                action: `level${level}`,
                label: game.i18n.format("ABEA.Power.LevelOption", {
                    level,
                    difficulty: game.i18n.localize(ABEA.difficulties[difficulty].label),
                    cost
                }),
                disabled: cost > energy,
                callback: () => level
            });
        }

        const level = await DialogV2.wait({
            window: { title: skillName },
            classes: ["abea", "abea-dialog"],
            content: `<p>${game.i18n.format("ABEA.Power.Choose", { energy })}</p>`,
            buttons
        });
        if (typeof level !== "number") return null;

        const { difficulty, cost } = ABEA.powers.levels[level];
        if (cost > energy) {
            ui.notifications.warn("ABEA.Power.NoEnergy", { localize: true });
            return null;
        }

        // Energy is spent on the attempt, whether it succeeds or not
        await this.update({ "system.attributes.energy.value": energy - cost });
        const config = ABEA.difficulties[difficulty];
        return { level, cost, target: config.value, label: game.i18n.localize(config.label) };
    }

    /**
     * Roll a Weapon Attack with one of the combat actions (p. 41-43).
     * Without an action, asks which one to use.
     * @param {string} itemId
     * @param {object} [options]
     * @param {string} [options.action]         Key of ABEA.combatActions
     * @param {number|null} [options.distance]  Distance to the target in varas (ranged attacks)
     */
    async rollWeaponAttack(itemId, { action = null, distance = null } = {}) {
        const weapon = this.items.get(itemId);
        if (!weapon || weapon.type !== "weapon") return ui.notifications.warn("ABEA: Arma não encontrada.");

        const targetToken = game.user.targets.first() ?? null;
        const targetActor = targetToken?.actor ?? null;

        if (!action) {
            const choice = await this.#chooseCombatAction(weapon, targetToken);
            if (!choice) return;
            ({ action, distance } = choice);
        }
        const config = ABEA.combatActions[action];
        const usage = weaponUsage(weapon);

        // Skill bonus (with the wound penalty)
        let skillName = weaponSkillName(weapon);
        if (!skillName && weapon.system.skillType) {
            skillName = (await fromUuid(weapon.system.skillType).catch(() => null))?.name ?? "";
        }
        const rank = getSkillRank(this.system, skillName);
        const skillBonus = effectiveRank(this.system, rank) * 3;
        const skillInfo = rank ? { name: skillName, rank } : null;

        // Difficulty
        let difficultyKey = config.difficulty;
        let band = null;
        if (action === "ranged") {
            band = rangeBand(weapon, distance);
            if (!band) return ui.notifications.warn("ABEA.Combat.OutOfRange", { localize: true });
            difficultyKey = band.difficulty;
        }
        if (action === "grapple") {
            if (!targetActor) return ui.notifications.warn("ABEA.Combat.NeedsTarget", { localize: true });
            difficultyKey = ["easy", "normal", "hard", "legendary"][Math.min(3, bestCombatRank(targetActor.system))];
        }
        const difficulty = ABEA.difficulties[difficultyKey];

        // Target defense: active in melee, passive at range (Ataque preciso depends on the weapon)
        const defenseType = config.defense ?? ((action === "precise") ? (usage === "ranged" ? "passive" : "active") : null);
        const targetDefense = (defenseType && targetActor) ? (targetActor.system.attributes.defense[defenseType] || 0) : 0;

        // Modifiers: weapon condition, ranged weapon used in melee, Auxiliar ataque from an ally
        const modifiers = [];
        const condition = Number(weapon.system.condition) || 0;
        if (condition) modifiers.push({ label: game.i18n.localize(ABEA.weaponConditions[String(condition)]), value: condition });
        if (config.penalty) modifiers.push({ label: game.i18n.localize("ABEA.Combat.RangedInMelee"), value: config.penalty });
        const aid = targetActor?.flags.abea?.aided;
        const aided = !!aid && (aid.key === combatRoundKey()) && (aid.by !== this.id);
        if (aided) modifiers.push({ label: game.i18n.localize("ABEA.Combat.Action.Aid"), value: ABEA.combatBonus.aid });
        const modifierTotal = modifiers.reduce((sum, m) => sum + m.value, 0);

        // Roll: 3d6 + skill + modifiers - target defense
        const roll = new Roll("3d6 + @skill + @mods - @defense", { skill: skillBonus, mods: modifierTotal, defense: targetDefense });
        await roll.evaluate();
        const dice = roll.terms[0].results.map(r => r.result);
        const isCritical = dice.every(d => d === 6);
        const isFumble = dice.every(d => d === 1);
        const total = roll.total;
        const isHit = (total >= difficulty.value) && !isFumble;

        if (aided) await AbeaActor.#setActorFlag(targetActor, "aided", null);

        // Damage (Ataque forte / preciso add 2; Desarmar and Agarrar cause none)
        const baseDamage = Number(weapon.system.damage) || 0;
        const damage = (config.damage === null) ? 0 : baseDamage + config.damage;
        let damageNote = null;
        if (isHit && targetActor && damage > 0) {
            if (targetActor.isOwner) {
                await targetActor.applyDamage(damage);
                damageNote = "ABEA.Chat.DamageApplied";
            } else {
                game.socket.emit("system.abea", { type: "applyDamage", data: { uuid: targetActor.uuid, damage } });
                damageNote = "ABEA.Chat.DamageRequested";
            }
        }
        let effectNote = null;
        if (isHit && (action === "disarm")) effectNote = "ABEA.Combat.Note.Disarmed";
        if (isHit && (action === "grapple")) effectNote = "ABEA.Combat.Note.Grappled";

        const content = await renderTemplate("systems/abea/templates/chat/attack-card.hbs", {
            weapon: { name: weapon.name, img: weapon.img },
            actionLabel: game.i18n.localize(config.label),
            skill: skillInfo,
            wounded: this.system.attributes.condition.wounded,
            target: targetActor ? {
                name: targetActor.name,
                defense: targetDefense,
                defenseLabel: defenseType
                    ? game.i18n.localize(defenseType === "active" ? "ABEA.Defense.ActiveShort" : "ABEA.Defense.PassiveShort")
                    : null
            } : null,
            difficulty: { label: game.i18n.localize(difficulty.label), cd: difficulty.value },
            band: (band && (distance !== null)) ? { label: game.i18n.localize(band.label), distance } : null,
            modifiers,
            total,
            isHit,
            isCritical,
            isFumble,
            showDamage: config.damage !== null,
            damage,
            damageNote,
            effectNote,
            rollHTML: await roll.render()
        });
        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            content
        });
    }

    /**
     * Ask which combat action to use with a weapon.
     * @param {Item} weapon
     * @param {Token|null} targetToken
     * @returns {Promise<{action: string, distance: number|null}|null>}
     */
    async #chooseCombatAction(weapon, targetToken) {
        const usage = weaponUsage(weapon);
        const melee = usage !== "ranged";
        const ranged = usage !== "melee";
        const grapple = normalizeName(weaponSkillName(weapon)) === normalizeName("Luta Livre");
        const deals = !!Number(weapon.system.damage);

        const actions = [];
        if (grapple) actions.push("grapple");
        if (melee && (!grapple || deals)) actions.push("melee", "strong");
        if (ranged) actions.push("ranged");
        if (usage === "ranged") actions.push("rangedMelee");
        if (!grapple || deals) actions.push("precise");
        if (melee) actions.push("disarm");

        // Distance for ranged attacks: measured to the target, editable by the player
        const selfToken = this.getActiveTokens(true, false)[0] ?? null;
        const measured = ranged ? distanceInVaras(selfToken, targetToken) : null;
        const ranges = weapon.system.ranges ?? {};
        let content = `<p>${game.i18n.localize("ABEA.Combat.ChooseAction")}</p>`;
        if (ranged) {
            const hint = ranges.max ? `<p class="hint">${game.i18n.format("ABEA.Combat.RangeHint", ranges)}</p>` : "";
            content += `
                <div class="form-group">
                    <label>${game.i18n.localize("ABEA.Combat.Distance")}</label>
                    <div class="form-fields"><input type="number" name="distance" min="0" step="1" value="${measured ?? ""}"></div>
                </div>${hint}`;
        }

        const result = await DialogV2.wait({
            window: { title: targetToken ? `${weapon.name} → ${targetToken.name}` : weapon.name },
            classes: ["abea", "abea-dialog"],
            content,
            buttons: actions.map(action => ({
                action,
                label: game.i18n.localize(ABEA.combatActions[action].label),
                callback: (event, button) => {
                    const value = button.form.elements.distance?.value;
                    return { action, distance: (value === undefined || value === "") ? null : Number(value) };
                }
            }))
        });
        return (result && typeof result === "object") ? result : null;
    }

    /* -------------------------------------------- */
    /*  Ações sem arma (p. 42-43)                   */
    /* -------------------------------------------- */

    /**
     * Defender-se: +2 active defense until the end of the round, no test.
     */
    async defend() {
        const key = combatRoundKey();
        if (!key) return ui.notifications.warn("ABEA.Combat.NeedsCombat", { localize: true });
        await this.setFlag("abea", "combat.defend", key);
        await this.#postActionCard("ABEA.Combat.Action.Defend", "ABEA.Combat.Note.Defend");
    }

    /**
     * Esquivar-se: intermediate test of Capoeira or Acrobacia; success gives +2 passive defense this round.
     */
    async dodge() {
        const key = combatRoundKey();
        if (!key) return ui.notifications.warn("ABEA.Combat.NeedsCombat", { localize: true });
        const best = ["Capoeira", "Acrobacia"]
            .map(name => ({ name, rank: getSkillRank(this.system, name) }))
            .sort((a, b) => b.rank - a.rank)[0];
        if (!best.rank) return ui.notifications.warn("ABEA.Combat.DodgeNeedsSkill", { localize: true });

        const bonus = effectiveRank(this.system, best.rank) * 3;
        const roll = await new Roll("3d6 + @bonus", { bonus }).evaluate();
        const dice = roll.terms[0].results.map(r => r.result);
        const isFumble = dice.every(d => d === 1);
        const difficulty = ABEA.difficulties.normal;
        const passed = (roll.total >= difficulty.value) && !isFumble;
        if (passed) await this.setFlag("abea", "combat.dodge", key);

        const content = await renderTemplate("systems/abea/templates/chat/roll-card.hbs", {
            name: `${game.i18n.localize("ABEA.Combat.Action.Dodge")} (${best.name})`,
            img: this.img,
            hasSkill: true,
            rank: best.rank,
            bonus,
            wounded: this.system.attributes.condition.wounded,
            difficulty: { label: game.i18n.localize(difficulty.label), cd: difficulty.value },
            passed,
            total: roll.total,
            isCritical: dice.every(d => d === 6),
            isFumble,
            rollHTML: await roll.render()
        });
        await roll.toMessage({ speaker: ChatMessage.getSpeaker({ actor: this }), content });
    }

    /**
     * Auxiliar ataque: the next attack of an ally against the targeted enemy this round gets +2.
     */
    async aid() {
        const key = combatRoundKey();
        if (!key) return ui.notifications.warn("ABEA.Combat.NeedsCombat", { localize: true });
        const target = game.user.targets.first()?.actor;
        if (!target) return ui.notifications.warn("ABEA.Combat.NeedsTarget", { localize: true });
        await AbeaActor.#setActorFlag(target, "aided", { key, by: this.id });
        await this.#postActionCard("ABEA.Combat.Action.Aid", "ABEA.Combat.Note.Aid", { target: target.name });
    }

    /**
     * Post a simple chat card for an action without a roll.
     * @param {string} titleKey
     * @param {string} noteKey
     * @param {object} [data]   Extra format data for the note
     */
    async #postActionCard(titleKey, noteKey, data = {}) {
        const content = await renderTemplate("systems/abea/templates/chat/action-card.hbs", {
            img: this.img,
            title: game.i18n.localize(titleKey),
            note: game.i18n.format(noteKey, { name: this.name, ...data })
        });
        await ChatMessage.create({ speaker: ChatMessage.getSpeaker({ actor: this }), content });
    }

    /**
     * Set (or clear, with null) an ABEA flag on any actor, asking the GM when the user doesn't own it.
     * @param {Actor} actor
     * @param {string} key
     * @param {*} value
     */
    static async #setActorFlag(actor, key, value) {
        if (actor.isOwner) {
            return (value === null) ? actor.unsetFlag("abea", key) : actor.setFlag("abea", key, value);
        }
        game.socket.emit("system.abea", { type: "setFlag", data: { uuid: actor.uuid, key, value } });
    }
}
