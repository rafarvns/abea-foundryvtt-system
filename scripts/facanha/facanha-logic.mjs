
import { checkFacanha } from "../helpers/utils.mjs";

export class FacanhaLogic {
    static get socketName() {
        return "system.abea";
    }

    static init() {
        game.socket.on(this.socketName, (packet) => {
            this._handleSocketMessage(packet);
        });
    }

    /**
     * Create the chat message for the Façanha request
     * @param {object} data { nome, players: [], cd, dificuldadeLabel }
     */
    static async createFacanhaMessage(data) {
        const templateData = {
            facanhaNome: data.nome,
            dificuldadeLabel: data.dificuldadeLabel,
            dificuldadeCD: data.cd,
            jogadores: data.players,
            allResolved: false,
            timestamp: Date.now()
        };

        const content = await renderTemplate("systems/abea/templates/chat/facanha-card.hbs", templateData);

        const messageData = {
            user: game.user.id,
            content: content,
            speaker: ChatMessage.getSpeaker({ alias: "Mestre" }),
            flags: {
                abea: {
                    isFacanha: true,
                    facanhaData: data
                }
            }
        };

        const message = await ChatMessage.create(messageData);

        // Notify players via socket?
        // Actually, creating a ChatMessage automatically syncs to all clients.
        // We don't need to manually emit a socket event for the creation itself.
        // The players will see the message appear.
        // But we DO need to handle the ROLL result back from the player.
    }

    /**
     * Handle socket messages
     * @param {object} packet 
     */
    static async _handleSocketMessage(packet) {
        if (packet.type === "rollResult" && game.user.isGM) {
            await this._processRollResult(packet.data);
        }
    }

    /**
     * Player clicks "Roll" on the chat card
     * @param {string} messageId 
     */
    static async rollFacanha(messageId) {
        const message = game.messages.get(messageId);
        if (!message) return;

        const flagData = message.getFlag("abea", "facanhaData");
        if (!flagData) return;

        // Check if user is one of the targets
        const playerEntry = flagData.players.find(p => p.userId === game.user.id);
        if (!playerEntry) {
            // GM might click it too? legacy code allowed GM to skip verify?
            if (!game.user.isGM) return ui.notifications.warn("Você não foi solicitado para esta façanha.");
            // If GM clicks, maybe roll as a selected token?
            // For now restrict to players in list.
            return;
        }

        if (playerEntry.status !== "aguardando") {
            return ui.notifications.info("Você já realizou esta rolagem.");
        }

        const actor = game.user.character;
        if (!actor) {
            return ui.notifications.warn("Você não possui um personagem atribuído.");
        }

        // Perform the Roll
        const skillName = flagData.nome;

        // Use the refactored rollSkill with chatMessage: false
        // We want to handle the chat output ourselves inside the card update
        // But maybe we also want a detailed roll message?
        // User requirements: "Results to update dynamically in chat" and "Update existing message".
        // BUT also "Detailed results".

        // Strategy:
        // 1. Roll silently to get the total.
        // 2. Post a separate "Public Roll" message so everyone sees the dice (transparency).
        // 3. Update the main "Request Card" with the success/failure status.

        let rollResult;

        // Try to find the skill on the actor
        const skill = actor.system.skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());

        if (skill) {
            rollResult = await actor.rollSkill(skill.name, { chatMessage: false });
        } else {
            // Fallback: Roll plain 3d6
            const roll = new Roll("3d6");
            await roll.evaluate();
            const dice = roll.terms[0].results.map(r => r.result);
            const isCritical = dice.every(d => d === 6);
            const isFumble = dice.every(d => d === 1);

            rollResult = {
                roll,
                total: roll.total,
                isCritical,
                isFumble,
                skill: null,
                bonus: 0
            };
        }

        // Send the detailed roll to chat (so dice are visible)
        // We can use the existing rollSkill flavor or make a simple one.
        // Let's rely on standard roll message for verification.
        const flavor = `Rolagem de Façanha: ${skillName} ` + (rollResult.skill ? `(+${rollResult.bonus})` : "(Sem Perícia)");
        await rollResult.roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: actor }),
            flavor: flavor
        });

        // Determine Success
        const cd = flagData.cd;
        const passed = rollResult.total >= cd;
        const status = passed ? "passou" : "falhou"; // or "sucesso" / "fracasso"? Legacy used "passou"/"falhou"

        // Send Result to GM via Socket
        // If we are GM, process locally
        const resultPayload = {
            messageId,
            userId: game.user.id,
            total: rollResult.total,
            status,
            passed
        };

        if (game.user.isGM) {
            await this._processRollResult(resultPayload);
        } else {
            game.socket.emit(this.socketName, {
                type: "rollResult",
                data: resultPayload
            });
            ui.notifications.info("Resultado enviado ao Mestre.");
        }
    }

    /**
     * GM processes the result and updates the card
     * @param {object} data 
     */
    static async _processRollResult(data) {
        const message = game.messages.get(data.messageId);
        if (!message) return;

        const flagData = foundry.utils.deepClone(message.getFlag("abea", "facanhaData"));
        if (!flagData) return;

        const playerIndex = flagData.players.findIndex(p => p.userId === data.userId);
        if (playerIndex === -1) return;

        flagData.players[playerIndex].status = data.status;
        flagData.players[playerIndex].resultado = data.total;

        const allResolved = flagData.players.every(p => p.status !== "aguardando");

        // Re-render template
        const templateData = {
            facanhaNome: flagData.nome,
            dificuldadeLabel: flagData.dificuldadeLabel,
            dificuldadeCD: flagData.cd,
            jogadores: flagData.players,
            allResolved: allResolved
        };

        const newContent = await renderTemplate("systems/abea/templates/chat/facanha-card.hbs", templateData);

        await message.update({
            content: newContent,
            "flags.abea.facanhaData": flagData
        });
    }

    static activateChatListeners(html, message) {
        // Find the button inside the message
        const button = html.find ? html.find(".facanha-rolar-btn") : $(html).find(".facanha-rolar-btn");
        if (button.length > 0) {
            button.on("click", (event) => {
                event.preventDefault();
                this.rollFacanha(message.id);
            });
        }
    }
}
