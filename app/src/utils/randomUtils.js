/**
 * Utility functions for generating random values.
 *
 * @namespace randomUtils
 * @type {Object}
 * @property {Function} getRandomColor - Generates a random color in hexadecimal format.
 * @property {Function} getRandomPosition - Generates a random position within the window.
 */
export const randomUtils = {
    /**
     * Function to generate a random color in hexadecimal format.
     * @returns {string} - A random color in hexadecimal format.
     */
    getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },

    /**
     * Function to generate a random position within the window.
     * @returns {Object} - An object containing x and y coordinates.
     */
    getRandomPosition() {
        const maxWidth = window.innerWidth * 0.8;  // 80% of the window width
        const maxHeight = window.innerHeight * 0.8;  // 80% of the window height
        return {
            x: Math.floor(Math.random() * maxWidth),
            y: Math.floor(Math.random() * maxHeight)
        };
    }
};
