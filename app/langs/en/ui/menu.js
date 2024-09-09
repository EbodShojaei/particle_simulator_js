/**
 * Configuration object for the menu UI.
 * 
 * This object contains the text content used in the menu of the Dynamic Particle Simulator application.
 * It provides labels and button text to guide users through the interface and interactions.
 * 
 * @constant {Object} menu
 * @property {string} title - The title of the application displayed prominently at the top of the menu.
 * @property {string} label - The label text for the input field where users specify the number of buttons to create. It includes the valid range of values.
 * @property {string} button - The text for the button that initiates the action of starting the game or simulation.
 * 
 * @example
 * // Accessing the title from the menu configuration
 * console.log(menu.title); // Outputs: "Dynamic Particle Simulator"
 * 
 * @example
 * // Using the label in a form
 * document.getElementById('label-id').textContent = menu.label;
 * 
 * @example
 * // Setting button text for the start button
 * document.getElementById('start-button-id').textContent = menu.button;
 */
export const menu = {
    title: "Dynamic Particle Simulator", // Title of the application
    label: "How many buttons to create? (3 - 7)", // Prompt for input field specifying valid range of button counts
    button: "Go" // Text for the button that starts the game or simulation
};
