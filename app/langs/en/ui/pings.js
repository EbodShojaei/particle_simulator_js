/**
 * Object containing validation and game status messages for the user interface.
 * 
 * This object defines a set of textual messages used for user notifications, validation feedback,
 * and status updates throughout the game or simulation. These messages help guide the user through 
 * different stages and provide feedback on their actions.
 * 
 * @constant {Object} pings
 * @property {string} invalidButtonCount - Error message displayed when the user enters a button count outside the allowed range (3 - 7). Informs the user to enter a valid number within this range.
 * @property {string} gameStarted - Message shown when the game starts, prompting the user to memorize the button order.
 * @property {string} memoryGameStarted - Instruction given to the user after the initial game start, directing them to click the buttons in the order they were displayed.
 * @property {string} excellentMemory - Positive feedback message displayed when the user successfully clicks the buttons in the correct order, indicating excellent memory.
 * @property {string} wrongOrder - Error message displayed when the user clicks the buttons in the incorrect order, indicating that the game is over.
 * 
 * @example
 * // Displaying the invalid button count message
 * alert(pings.invalidButtonCount); // Outputs: "Please enter a number between 3 and 7."
 * 
 * @example
 * // Showing the game started message
 * console.log(pings.gameStarted); // Outputs: "Game started! Memorize the button order."
 * 
 * @example
 * // Providing feedback on excellent memory
 * document.getElementById('feedback').textContent = pings.excellentMemory; // Updates element with text: "Excellent memory!"
 */
export const pings = {
    invalidButtonCount: "Please enter a number between 3 and 7.", // Message shown for invalid button count input
    gameStarted: "Game started! Memorize the button order.", // Notification indicating that the game has begun
    memoryGameStarted: "Now click the buttons in the original order.", // Instruction for the next phase of the game
    excellentMemory: "Excellent memory!", // Positive feedback for correct button sequence
    wrongOrder: "Wrong order! Game over." // Notification for incorrect button sequence, signaling game end
};
