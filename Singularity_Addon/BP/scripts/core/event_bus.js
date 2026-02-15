import { world, system } from "@minecraft/server";

class EventBus {
    constructor() {
        this.listeners = new Map();

        // Initialize core listeners
        this.initialize();
    }

    /**
     * Initializes global event listeners to feed the bus.
     */
    initialize() {
        // Block Break Event
        world.afterEvents.playerBreakBlock.subscribe((event) => {
            this.emit("blockBreak", event);
        });

        // Item Use Event
        world.afterEvents.itemUse.subscribe((event) => {
            this.emit("itemUse", event);
        });

        // Tick Event
        system.runInterval(() => {
             this.emit("tick", {});
        }, 1);
    }

    /**
     * Subscribe to a custom event.
     * @param {string} eventName
     * @param {Function} callback
     */
    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        this.listeners.get(eventName).push(callback);
    }

    /**
     * Emit an event to all subscribers.
     * @param {string} eventName
     * @param {object} data
     */
    emit(eventName, data) {
        if (this.listeners.has(eventName)) {
            for (const callback of this.listeners.get(eventName)) {
                try {
                    callback(data);
                } catch (e) {
                    console.warn(`Error in event listener for ${eventName}: ${e}`);
                }
            }
        }
    }
}

export const eventBus = new EventBus();
