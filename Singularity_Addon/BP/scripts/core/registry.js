import { world } from "@minecraft/server";

// Define the Radiation Component Logic
const RadiationComponent = {
    onStepOn: (event) => {
        const { entity } = event;
        // Check if entity is a player
        if (entity && entity.typeId === "minecraft:player") {
            // Apply 2 damage (1 heart) - Radiation Burn
            // TODO: Add Hazmat Suit check here later
            try {
                entity.applyDamage(2, { cause: "contact" });
            } catch (e) {
                console.warn("Failed to apply radiation damage: " + e);
            }
        }
    },
    onPlayerInteract: (event) => {
         const { player } = event;
         if (player) {
             // Dangerous to touch
             try {
                player.applyDamage(2, { cause: "contact" });
             } catch (e) {
                 console.warn("Failed to apply radiation interact damage: " + e);
             }
         }
    }
};

class Registry {
    constructor() {
        this.customComponents = new Map();
        this.items = new Map(); // Metadata registry

        // Register core components immediately to the internal map
        this.registerComponent("singularity:radiation_emitter", RadiationComponent);

        // Register core item metadata
        this.registerItemData("singularity:uranium_ore", { type: "block", hazardous: true });
        this.registerItemData("singularity:tin_ore", { type: "block", hazardous: false });
        this.registerItemData("singularity:primalite_ore", { type: "block", hazardous: false });
    }

    /**
     * Registers a custom block component to the internal map.
     * @param {string} id
     * @param {object} component
     */
    registerComponent(id, component) {
        this.customComponents.set(id, component);
    }

    /**
     * Register item metadata.
     * @param {string} id
     * @param {object} data
     */
    registerItemData(id, data) {
        this.items.set(id, data);
    }

    /**
     * Called during worldInitialize to register all components to the game.
     * @param {object} initEvent
     */
    initialize(initEvent) {
        for (const [id, component] of this.customComponents) {
            initEvent.blockComponentRegistry.registerCustomComponent(id, component);
        }
    }
}

export const registry = new Registry();
