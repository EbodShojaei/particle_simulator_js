/**
 * Renderer class for handling the rendering and manipulation of buttons and canvas in a web application.
 * 
 * This class manages the canvas element, including resizing, rendering buttons, and clearing the canvas.
 * It also handles the positioning and appending of button elements to the canvas.
 * 
 * @class Renderer
 */
export class Renderer {
    /**
     * Creates an instance of the Renderer class.
     * Initializes the canvas and its 2D context.
     */
    constructor() {
        /**
         * @type {HTMLCanvasElement}
         * @private
         */
        this.canvas = document.getElementById('game-canvas');

        /**
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this.context = this.canvas.getContext('2d');
    }

    /**
     * Initializes the canvas by setting its size to match the window's dimensions
     * and adding an event listener to handle window resize events.
     */
    initializeCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
    }

    /**
     * Resizes the canvas to match the window's inner width and height.
     * This method is called on window resize events to ensure the canvas always fills the viewport.
     */
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    /**
     * Renders a button element with the specified properties.
     * 
     * @param {Object} button - An object representing the button's properties.
     * @param {string} button.id - The ID to assign to the button element.
     * @param {string} button.className - The CSS class to assign to the button element.
     * @param {Object} button.style - The inline styles to apply to the button element.
     * @param {Object} button.vertex - The position of the button on the canvas.
     * @param {number} button.vertex.px - The x-coordinate of the button's position.
     * @param {number} button.vertex.py - The y-coordinate of the button's position.
     * 
     * @returns {HTMLButtonElement} The created button element.
     */
    renderButton(button) {
        const buttonElement = document.createElement('button');
        buttonElement.id = button.id;
        buttonElement.className = button.className;
        Object.assign(buttonElement.style, button.style);
        buttonElement.style.transform = `translate3d(${button.vertex.px}px, ${button.vertex.py}px, 0)`;
        buttonElement.style.position = 'absolute';
        buttonElement.style.transition = 'transform 0.5s ease-out';

        return buttonElement;
    }

    /**
     * Appends an element to the parent of the canvas.
     * 
     * @param {HTMLElement} element - The element to append to the canvas's parent.
     */
    appendToCanvas(element) {
        this.canvas.parentElement.appendChild(element);
    }

    /**
     * Updates the position of a button element based on its new coordinates.
     * 
     * @param {Object} button - An object representing the button's updated properties.
     * @param {string} button.id - The ID of the button element to update.
     * @param {Object} button.vertex - The new position of the button on the canvas.
     * @param {number} button.vertex.px - The new x-coordinate of the button's position.
     * @param {number} button.vertex.py - The new y-coordinate of the button's position.
     */
    updateButtonPosition(button) {
        const buttonElement = document.getElementById(button.id);
        if (buttonElement) {
            buttonElement.style.transform = `translate3d(${button.vertex.px}px, ${button.vertex.py}px, 0)`;
        }
    }

    /**
     * Clears the canvas by removing all child elements from the canvas's parent
     * and clearing the canvas's drawing context.
     */
    clearCanvas() {
        const canvasContainer = this.canvas.parentElement;
        while (canvasContainer.firstChild) {
            canvasContainer.removeChild(canvasContainer.firstChild);
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
