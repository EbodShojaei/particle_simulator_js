/**
 * Math utilities.
 * 
 * @namespace mathUtils
 * @type {Object}
 * @property {Function} calculateDistance - Calculates the distance between two points.
 * @property {Function} clamp - Clamps a value between a minimum and maximum value.
 */
export const mathUtils = {
    /**
     * Calculates the distance between two points.
     * 
     * @param {number} x1 - The x-coordinate of the first point.
     * @param {number} y1 - The y-coordinate of the first point.
     * @param {number} x2 - The x-coordinate of the second point.
     * @param {number} y2 - The y-coordinate of the second point.
     * @returns {number} The distance between the two points.
     */
    calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },

    /**
     * Clamps a value between a minimum and maximum value.
     * 
     * @param {number} value - The value to clamp.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The clamped value.
     */
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
};