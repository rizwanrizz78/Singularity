/**
 * @file energy.js
 * @description Flux Energy (FE) Interface Skeleton.
 */

export class EnergyContainer {
    constructor(capacity = 1000) {
        this.energy = 0;
        this.capacity = capacity;
    }

    /**
     * Adds energy to the container.
     * @param {number} amount
     * @returns {number} The actual amount added.
     */
    addEnergy(amount) {
        const space = this.capacity - this.energy;
        const toAdd = Math.min(amount, space);
        this.energy += toAdd;
        return toAdd;
    }

    /**
     * Removes energy from the container.
     * @param {number} amount
     * @returns {number} The actual amount removed.
     */
    removeEnergy(amount) {
        const toRemove = Math.min(amount, this.energy);
        this.energy -= toRemove;
        return toRemove;
    }

    /**
     * Gets the current energy level.
     * @returns {number}
     */
    getEnergy() {
        return this.energy;
    }
}
