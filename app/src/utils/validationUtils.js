import { OBJECT_LIMITS } from "../config/limits";

/**
 * Validates the button count.
 * 
 * @namespace validationUtils
 * @type {Object}
 * @property {Function} isValidButtonCount - Checks if the button count is valid.
 */
export const validationUtils = {
    /**
     * Checks if the button count is valid.
     *
     * @param {number} count - The count of buttons to validate.
     * @returns {boolean} - Returns true if the count is a valid number between 3 and 7 (inclusive), otherwise returns false.
     */
    isValidButtonCount(count) {
        return Number.isInteger(count) && count >= OBJECT_LIMITS.LOW && count <= OBJECT_LIMITS.HIGH;
    }
};