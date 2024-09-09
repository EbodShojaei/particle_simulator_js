/**
 * Memory class is used to store the game states in memory.
 * 
 * @param {Array} gameStates - An array to store the game states.
 */
export class Memory {
    /**
     * Creates a new Memory instance.
     * 
     * @returns {Memory} - A new Memory instance
     */
    constructor() {
        this.gameStates = [];
    }

    /**
     * Saves a game state to memory.
     * 
     * @param {object} state - The game state to save.
     */
    saveState(state) {
        this.gameStates.push(JSON.parse(JSON.stringify(state)));
    }

    /**
     * Gets a game state from memory.
     * 
     * @param {number} index - The index of the game state to get.
     * @returns {object} - The game state at the specified index.
     */
    getState(index) {
        return this.gameStates[index];
    }

    /**
     * Gets all game states from memory.
     * 
     * @returns {Array} - An array of all game states.
     */
    getAllStates() {
        return this.gameStates;
    }

    /**
     * Clears all game states from memory.
     */
    clearMemory() {
        this.gameStates = [];
    }
}