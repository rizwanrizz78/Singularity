import { world } from "@minecraft/server";
import { registry } from "./core/registry.js";
import { eventBus } from "./core/event_bus.js";
import "./systems/energy.js";
import "./systems/magic.js";

// Initialize Registry during worldInitialize
world.beforeEvents.worldInitialize.subscribe((initEvent) => {
    registry.initialize(initEvent);
    console.warn("Singularity Core: Registry Initialized");
});

// Log loaded message to content log
console.warn("Singularity Core Loaded");

// Example: Use EventBus to log block breaks
eventBus.on("blockBreak", (event) => {
    const { block, player } = event;
    // Additional logic can be hooked here
    // console.warn(`Singularity: Block broken: ${block.typeId}`);
});
