/**
 * @file magic.js
 * @description Magic System (Aura) Skeleton.
 */

export class MagicAura {
    constructor(maxAura = 100) {
        this.aura = 0;
        this.maxAura = maxAura;
    }

    /**
     * Checks if enough Aura is available.
     * @param {number} cost
     * @returns {boolean}
     */
    canCast(cost) {
        return this.aura >= cost;
    }

    /**
     * Consumes Aura for a spell.
     * @param {number} cost
     * @returns {boolean} True if successful.
     */
    castSpell(cost) {
        if (this.canCast(cost)) {
            this.aura -= cost;
            return true;
        }
        return false;
    }

    /**
     * Regenerates Aura.
     * @param {number} amount
     */
    regenerate(amount) {
        this.aura = Math.min(this.aura + amount, this.maxAura);
    }
}
