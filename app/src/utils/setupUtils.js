// Import necessary modules and utilities
import { menu } from '../../langs/en/ui/menu.js'; // Menu text content
import { pings } from '../../langs/en/ui/pings.js'; // Validation messages
import { validationUtils } from './validationUtils.js'; // Utility functions for validation
import { Game } from '../Game.js'; // Game class

/**
 * Initializes the game by setting up the UI and attaching event handlers.
 */
export function initializeGame() {
    setupUi(); // Set up user interface elements
    attachGameHandler(); // Attach event handlers for game interactions
}

/**
 * Sets up the user interface by creating and appending various UI elements.
 */
function setupUi() {
    createMenu(); // Create and append the menu to the document
    createCanvas(); // Create and append the game canvas to the document

    const gameContainer = document.getElementById('game-container'); // Get the container for game elements

    // Create and append UI elements to the game container
    createTitle(gameContainer); // Create and append the game title
    createMessageDisplay(gameContainer); // Create and append the message display area
    createTimerDisplay(gameContainer); // Create and append the timer display area
    createNotificationBanner(gameContainer); // Create and append the notification banner
}

/**
 * Creates and appends the menu to the document body.
 */
function createMenu() {
    const menuContainer = document.createElement('div'); // Create the menu container div
    menuContainer.id = 'menu-container'; // Set the ID for styling and scripting
    menuContainer.className = ''; // Add any necessary classes (currently empty)

    // Create and append menu components
    createLabel(menuContainer); // Create and append the label
    createInput(menuContainer); // Create and append the input field
    createStartButton(menuContainer); // Create and append the start button
    document.body.appendChild(menuContainer); // Append the menu container to the body
}

/**
 * Creates and appends the game title to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the title to.
 */
function createTitle(parent) {
    const titleElement = document.createElement('h1'); // Create the title element
    titleElement.textContent = menu.title; // Set the title text from the menu configuration
    parent.appendChild(titleElement); // Append the title to the parent element
}

/**
 * Creates and appends the game canvas to the document body.
 */
function createCanvas() {
    const canvas = document.createElement('canvas'); // Create the canvas element
    canvas.id = 'game-canvas'; // Set the ID for styling and scripting
    canvas.style.width = '100vw'; // Set canvas width to viewport width
    canvas.style.height = '100vh'; // Set canvas height to viewport height
    canvas.style.position = 'absolute'; // Position canvas absolutely
    canvas.style.top = '0'; // Align canvas to the top
    canvas.style.left = '0'; // Align canvas to the left
    canvas.style.border = '1px solid #000'; // Add a border around the canvas
    document.body.appendChild(canvas); // Append the canvas to the body

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

/**
 * Creates and appends the message display area to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the message display to.
 */
function createMessageDisplay(parent) {
    const messageDisplay = document.createElement('div'); // Create the message display div
    messageDisplay.id = 'message-display'; // Set the ID for styling and scripting
    parent.insertBefore(messageDisplay, parent.firstChild); // Insert message display at the beginning of the parent
}

/**
 * Creates and appends the timer display area to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the timer display to.
 */
function createTimerDisplay(parent) {
    const timerDisplay = document.createElement('div'); // Create the timer display div
    timerDisplay.id = 'timer-display'; // Set the ID for styling and scripting
    parent.appendChild(timerDisplay); // Append timer display to the parent
}

/**
 * Creates and appends the notification banner to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the notification banner to.
 */
function createNotificationBanner(parent) {
    const banner = document.createElement('div'); // Create the notification banner div
    banner.id = 'notification-banner'; // Set the ID for styling and scripting
    banner.className = 'notification hidden'; // Add classes for styling and hiding
    parent.appendChild(banner); // Append the banner to the parent
}

/**
 * Creates and appends a label to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the label to.
 */
function createLabel(parent) {
    const label = document.createElement('label'); // Create the label element
    label.textContent = menu.label; // Set the label text from the menu configuration
    label.setAttribute('for', 'button-count'); // Set the 'for' attribute for accessibility
    parent.appendChild(label); // Append the label to the parent
}

/**
 * Creates and appends an input field to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the input field to.
 */
function createInput(parent) {
    const input = document.createElement('input'); // Create the input element
    input.type = 'number'; // Set input type to number
    input.id = 'button-count'; // Set the ID for styling and scripting
    input.min = '3'; // Set the minimum value for the input
    input.max = '7'; // Set the maximum value for the input
    parent.appendChild(input); // Append the input field to the parent
}

/**
 * Creates and appends a start button to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the start button to.
 */
function createStartButton(parent) {
    const button = document.createElement('button'); // Create the button element
    button.id = 'start-game'; // Set the ID for styling and scripting
    button.textContent = menu.button; // Set the button text from the menu configuration
    parent.appendChild(button); // Append the button to the parent
}

/**
 * Attaches event handlers for the game start button and manages game interactions.
 */
function attachGameHandler() {
    const startButton = document.getElementById('start-game'); // Get the start button
    const buttonCountInput = document.getElementById('button-count'); // Get the button count input
    const messageDisplay = document.getElementById('message-display'); // Get the message display area

    // Attach click event listener to the start button
    startButton.addEventListener('click', () => {
        const buttonCount = parseInt(buttonCountInput.value); // Get and parse the button count input value
        if (validationUtils.isValidButtonCount(buttonCount)) { // Validate the button count
            hideMenuDuringGame(); // Hide the menu during the game
            const game = new Game(buttonCount); // Create a new game instance
            game.onGameEnd = showMenuAfterGame; // Set the callback for when the game ends
            game.start(); // Start the game
        } else {
            messageDisplay.textContent = pings.invalidButtonCount; // Display an error message if invalid
        }
    });
}

/**
 * Hides the menu container during the game.
 */
function hideMenuDuringGame() {
    const menu = document.getElementById('menu-container'); // Get the menu container
    menu.classList.add('hidden'); // Add the 'hidden' class to hide the menu
}

/**
 * Shows the menu container after the game ends.
 */
function showMenuAfterGame() {
    const menu = document.getElementById('menu-container'); // Get the menu container
    menu.classList.remove('hidden'); // Remove the 'hidden' class to show the menu
}
