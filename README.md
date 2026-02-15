# Singularity Addon (v1.0.0-dev)

**A "Kitchen Sink" Mega-Addon for Minecraft Bedrock Edition**
*Core Philosophy: Convergence. Tech and Magic interact via a central Event Bus.*

## 🚀 Installation & Setup

This addon is designed for direct development on mobile or environments without build tools. It uses **Pure JavaScript** and the `@minecraft/server` Beta APIs.

### 1. Requirements
*   **Minecraft Bedrock Edition:** Version 1.20.80+ (with Beta APIs enabled).
*   **Experiments:** Ensure "Beta APIs" is toggled ON in your world settings.

### 2. Installing
1.  Navigate to your Minecraft `com.mojang` directory.
2.  Copy the `Singularity_Addon/BP` folder into `development_behavior_packs`.
3.  Copy the `Singularity_Addon/RP` folder into `development_resource_packs`.
4.  Launch Minecraft and create a new world.
5.  Activate the "Singularity BP" and "Singularity RP" packs.

---

## 🎨 Texture Creation Guide (Action Required)

Since this project only contains the code and logical mappings, **you must create the following image files** for the items to appear correctly in-game.

### 1. Folder Structure
You need to create these folders inside `Singularity_Addon/RP/`:
```
Singularity_Addon/RP/
└── textures/
    ├── blocks/
    │   └── singularity/  <-- Create this folder
    └── items/
        └── singularity/  <-- Create this folder
```

### 2. Required Block Textures (16x16 PNG)
Place these files in `RP/textures/blocks/singularity/`:
- [ ] `tin_ore.png` (Stone-like ore texture, gray/white spots)
- [ ] `primalite_ore.png` (Deepslate-like ore texture, teal/cyan spots)
- [ ] `uranium_ore.png` (Stone-like ore texture, bright green glowing spots)

### 3. Required Item Textures (16x16 PNG)
Place these files in `RP/textures/items/singularity/`:
- [ ] `copper_dust.png` (Pile of orange dust)
- [ ] `primalite_gem.png` (Cyan gemstone)
- [ ] `singularium_alloy.png` (Dark purple ingot)
- [ ] `raw_tin.png` (Chunky raw ore, gray/white)
- [ ] `tin_ingot.png` (Standard ingot, silver/gray)
- [ ] `raw_uranium.png` (Chunky raw ore, green)
- [ ] `uranium_ingot.png` (Standard ingot, dark green)

---

## 📂 Project Structure

This project does **NOT** use TypeScript or build tools. All code is written in standard ES6 JavaScript.

```
Singularity_Addon/
├── BP/ (Behavior Pack)
│   ├── manifest.json       # Dependencies: @minecraft/server 1.13.0-beta
│   ├── blocks/             # Custom Block Definitions (JSON)
│   ├── items/              # Custom Item Definitions (JSON)
│   └── scripts/            # Scripting API Code
│       ├── main.js         # Entry Point (World Initialize)
│       ├── core/           # Core Systems
│       │   ├── registry.js  # Data-Driven Item/Block Registration
│       │   ├── event_bus.js # Centralized Event Handling
│       └── systems/        # Gameplay Modules
│           ├── energy.js    # Flux Energy (FE) Skeleton
│           └── magic.js     # Aura Magic Skeleton
└── RP/ (Resource Pack)
    ├── manifest.json
    └── textures/           # Texture Mappings (JSON)
        ├── item_texture.json
        └── terrain_texture.json
```

---

## ✨ Features (Phase 1)

### 🌍 Ores & Resources
*   **Tin:** `singularity:tin_ore` (Standard generation), `singularity:raw_tin`, `singularity:tin_ingot`.
*   **Uranium:** `singularity:uranium_ore` (Hazardous - radiates damage), `singularity:raw_uranium`, `singularity:uranium_ingot`.
*   **Primalite:** `singularity:primalite_ore` (Deepslate tier), `singularity:primalite_gem`.
*   **Alloys:** `singularity:singularium_alloy`.
*   **Vanilla Integration:** Adds `singularity:copper_dust` for processing vanilla Copper.

### ⚙️ Technical Systems
*   **Custom Components:** `singularity:radiation_emitter` deals damage to players who step on or interact with Uranium Ore.
*   **Event Bus:** A centralized system in `event_bus.js` to manage world events (`blockBreak`, `itemUse`) efficiently.
*   **Registry:** A scalable `Registry` class in `registry.js` handles data-driven registration of components and items.

---

## 🛠️ Development Guidelines

1.  **No Build Tools:** Do not add `package.json`, `tsconfig.json`, or `webpack`. All code must run natively.
2.  **Vanilla Parity:** Do not create custom versions of vanilla items (e.g., no `singularity:copper_ingot`). Use the vanilla ID.
3.  **Prefix:** All new IDs must use `singularity:`.
4.  **Textures:** Texture mapping is handled in `RP/textures/*.json`. Actual image files are not included in this repo (logical mapping only).

---

**Status:** Phase 1 Complete (Core Architecture, Basic Ores, Scripting Foundation).
