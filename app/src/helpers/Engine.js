import { randomUtils } from '../utils/randomUtils.js';
import { pings } from '../../langs/en/ui/pings.js';

/**
 * Engine class for managing the game logic, including initialization, simulation, and game state management.
 * 
 * This class handles the game's core functionalities, such as starting simulations, rendering buttons,
 * scrambling their positions, handling user interactions, and managing game states.
 * 
 * @class Engine
 */
export class Engine {
    /**
     * Creates an instance of the Engine class.
     * 
     * @param {StateManager} stateManager - The state manager for handling game states.
     * @param {Scheduler} scheduler - The scheduler for managing timed tasks.
     * @param {Memory} memory - The memory component for game state storage.
     * @param {Displayer} displayer - The displayer component for showing messages and notifications.
     * @param {Renderer} renderer - The renderer component for rendering and updating the canvas and buttons.
     */
    constructor(stateManager, scheduler, memory, displayer, renderer) {
        /**
         * @type {StateManager}
         * @private
         */
        this.stateManager = stateManager;

        /**
         * @type {Scheduler}
         * @private
         */
        this.scheduler = scheduler;

        /**
         * @type {Memory}
         * @private
         */
        this.memory = memory;

        /**
         * @type {Displayer}
         * @private
         */
        this.displayer = displayer;

        /**
         * @type {Renderer}
         * @private
         */
        this.renderer = renderer;

        /**
         * @type {Object|null}
         * @private
         */
        this.grid = null;

        /**
         * @type {Array}
         * @private
         */
        this.buttons = [];

        /**
         * @type {Array}
         * @private
         */
        this.originalOrder = [];

        /**
         * @type {Array}
         * @private
         */
        this.clickedOrder = [];

        /**
         * @type {boolean}
         * @private
         */
        this.isGameActive = false;
    }

    /**
     * Initializes the game with a grid and a set of buttons.
     * 
     * @param {Object} grid - The grid object used in the game.
     * @param {Array} buttons - The array of button objects to be used in the game.
     */
    initializeGame(grid, buttons) {
        this.grid = grid;
        this.buttons = buttons;
        this.originalOrder = buttons.map(button => button.id);
        this.stateManager.setState({ grid, buttons });
    }

    /**
     * Starts the simulation by setting the game as active, showing a start message,
     * starting a timer, and rendering the initial buttons.
     * 
     * @param {number} buttonCount - The number of buttons to display in the simulation.
     */
    startSimulation(buttonCount) {
        this.isGameActive = true;
        this.displayer.showMessage(pings.gameStarted);
        this.displayer.startTimer(buttonCount);
        this.renderInitialButtons();

        this.scheduler.scheduleTask(() => {
            // TODO: Implement the logic to pause/resume the timer
            this.displayer.stopTimer();
            this.scrambleButtons(buttonCount);
        }, buttonCount * 1000);
    }

    /**
     * Renders the initial set of buttons on the canvas.
     * Each button is assigned a random background color and a number.
     */
    renderInitialButtons() {
        this.buttons.forEach((button, index) => {
            const buttonElement = this.renderer.renderButton(button);
            buttonElement.style.backgroundColor = randomUtils.getRandomColor();
            buttonElement.textContent = index + 1;
            this.renderer.appendToCanvas(buttonElement);
        });
    }

    /**
     * Scrambles the positions of the buttons on the canvas.
     * 
     * @param {number} times - The number of times to scramble the buttons.
     */
    scrambleButtons(times) {
        let count = 0;
        const intervalId = setInterval(() => {
            this.buttons.forEach(button => {
                const { x, y } = this.getValidPosition();
                button.vertex.px = x;
                button.vertex.py = y;
                this.renderer.updateButtonPosition(button);
            });

            count++;
            if (count >= times) {
                clearInterval(intervalId);
                this.startMemoryGame();
            }
        }, 2000);
    }

    /**
     * Generates a valid position within the window bounds for button placement.
     * 
     * @returns {Object} The coordinates of the valid position.
     * @returns {number} x - The x-coordinate of the position.
     * @returns {number} y - The y-coordinate of the position.
     */
    getValidPosition() {
        const maxWidth = window.innerWidth - 100;
        const maxHeight = window.innerHeight - 50;
        return {
            x: Math.max(0, Math.min(randomUtils.getRandomPosition().x, maxWidth)),
            y: Math.max(0, Math.min(randomUtils.getRandomPosition().y, maxHeight))
        };
    }

    /**
     * Starts the memory game by setting up button click event listeners and
     * showing the start message.
     */
    startMemoryGame() {
        this.displayer.showMessage(pings.memoryGameStarted);
        this.buttons.forEach(button => {
            const buttonElement = document.getElementById(button.id);
            buttonElement.textContent = '';
            buttonElement.addEventListener('click', () => this.handleButtonClick(button));
        });
    }

    /**
     * Handles button clicks during the memory game.
     * 
     * @param {Object} button - The button object that was clicked.
     */
    handleButtonClick(button) {
        if (!this.isGameActive) return;

        this.clickedOrder.push(button.id);
        const index = this.clickedOrder.length - 1;

        if (button.id === this.originalOrder[index]) {
            this.displayer.showButtonNumber(button, index + 1);
            if (this.clickedOrder.length === this.buttons.length) {
                this.endGame(true);
            }
        } else {
            this.endGame(false);
        }
    }

    /**
     * Ends the game, showing a notification based on the outcome,
     * and resets the game state after a short delay.
     * 
     * @param {boolean} isWinner - Indicates whether the game was won or lost.
     */
    endGame(isWinner) {
        this.isGameActive = false;
        this.displayer.showNotification(
            isWinner ? pings.excellentMemory : pings.wrongOrder,
            isWinner
        );
        if (!isWinner) {
            this.revealCorrectOrder();
        }
        // Reset the game after 3 seconds
        setTimeout(() => this.reset(), 3000);
    }

    /**
     * Reveals the correct order of button clicks after a game loss.
     */
    revealCorrectOrder() {
        this.originalOrder.forEach((buttonId, index) => {
            const button = this.buttons.find(b => b.id === buttonId);
            this.displayer.showButtonNumber(button, index + 1);
        });
    }

    /**
     * Resets the game state and clears the canvas.
     */
    reset() {
        this.grid = null;
        this.buttons = [];
        this.originalOrder = [];
        this.clickedOrder = [];
        this.isGameActive = false;
        this.stateManager.resetState();
        this.scheduler.clearAllTasks();
        this.displayer.stopTimer();
        this.renderer.clearCanvas();
    }
}
