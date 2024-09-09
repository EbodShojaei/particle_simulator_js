import { Engine } from './helpers/Engine.js';
import { StateManager } from './helpers/state/controllers/StateManager.js';
import { Scheduler } from './helpers/state/controllers/Scheduler.js';
import { Memory } from './helpers/state/storage/Memory.js';
import { Displayer } from './helpers/view/Displayer.js';
import { Renderer } from './helpers/view/Renderer.js';
import { ObjectFactory } from './models/factory/ObjectFactory.js';
import { GridFactory } from './models/factory/GridFactory.js';
import { activeSchemas } from './config/objects.js';

/**
 * The Game class manages the overall game flow, including initialization, starting, and resetting the game.
 */
export class Game {
    /**
     * Creates an instance of the Game class.
     * @param {number} buttonCount - The number of buttons to initialize in the game.
     */
    constructor(buttonCount) {
        this.buttonCount = buttonCount;
        // Initialize game components
        this.stateManager = new StateManager();
        this.scheduler = new Scheduler();
        this.memory = new Memory();
        this.displayer = new Displayer();
        this.renderer = new Renderer();
        this.objectFactory = new ObjectFactory();
        this.gridFactory = new GridFactory();
        this.engine = new Engine(
            this.stateManager,
            this.scheduler,
            this.memory,
            this.displayer,
            this.renderer
        );
    }

    /**
     * Starts the game by creating a grid and buttons, initializing the game engine, and starting the simulation.
     */
    start() {
        // Create a grid using the GridFactory
        const grid = this.gridFactory.create({
            id: 'game-grid',
            ...activeSchemas.gridSchema.element
        }).datum;

        // Create buttons using the ObjectFactory
        const buttons = Array.from({ length: this.buttonCount }, (_, i) =>
            this.objectFactory.create({
                id: `button-${i + 1}`,
                ...activeSchemas.buttonSchema.element
            }).datum
        );

        // Initialize the game with the created grid and buttons
        this.engine.initializeGame(grid, buttons);
        // Start the simulation
        this.engine.startSimulation(this.buttonCount);
    }

    /**
     * Resets the game state, clears the display, and resets the state manager.
     */
    reset() {
        // Reset the game engine
        this.engine.reset();
        // Clear the canvas
        this.displayer.clearCanvas();
        // Reset the state manager
        this.stateManager.resetState();
    }
}
