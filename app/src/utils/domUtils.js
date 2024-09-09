/**
 * This file contains utility functions for manipulating the DOM.
 * 
 * @namespace domUtils
 * @type {Object}
 * @property {Function} createElement - Creates a new DOM element with the specified tag and attributes.
 * @property {Function} removeAllChildren - Removes all child nodes from the specified element.
 */
export const domUtils = {
    /**
     * Creates a new DOM element with the specified tag and attributes.
     *
     * @param {string} tag - The tag name of the element.
     * @param {Object} [attributes={}] - The attributes to be applied to the element.
     * @returns {HTMLElement} The newly created DOM element.
     */
    createElement(tag, attributes = {}) {
        const element = document.createElement(tag);
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'style' && typeof value === 'object') {
                Object.assign(element.style, value);
            } else {
                element.setAttribute(key, value);
            }
        });
        return element;
    },

    /**
     * Removes all child nodes from the specified element.
     *
     * @param {HTMLElement} element - The element from which to remove child nodes.
     */
    removeAllChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
};