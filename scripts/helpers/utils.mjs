
/**
 * Helper utility functions for ABEA
 */

import { ABEA } from "../config.mjs";

/**
 * Check a roll result against a difficulty (Façanha).
 * @param {number} total        The total roll result
 * @param {string|number} difficulty  The difficulty key ('easy', 'normal'...) or a number
 * @returns {Object} { success, diff, target, label }
 */
export function checkFacanha(total, difficulty) {
    let target = 12; // Default Easy
    let label = "Desconhecido";

    if (typeof difficulty === "number") {
        target = difficulty;
        label = "Custom";
    } else if (typeof difficulty === "string") {
        const key = difficulty.toLowerCase();
        const conf = ABEA.difficulties[key];
        if (conf) {
            target = conf.value;
            label = conf.label; // Should be localized by caller if needed
        }
    }

    const success = total >= target;
    const diff = total - target;

    return {
        success,
        diff,
        target,
        label,
        isCritical: false, // These are determined by dice, not total, but placeholder
        isFumble: false
    };
}
