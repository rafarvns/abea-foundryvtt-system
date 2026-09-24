/**
 * Combat rules from the core book (p. 40):
 * - initiative is 3d6 (see CONFIG.Combat.initiative);
 * - on a tie, the participants' characters act before the mediator's.
 * @extends {Combat}
 */
export class AbeaCombat extends Combat {

    /** @override */
    _sortCombatants(a, b) {
        const ia = Number.isNumeric(a.initiative) ? a.initiative : -Infinity;
        const ib = Number.isNumeric(b.initiative) ? b.initiative : -Infinity;
        return (ib - ia) || (Number(a.isNPC) - Number(b.isNPC)) || (a.id > b.id ? 1 : -1);
    }
}
