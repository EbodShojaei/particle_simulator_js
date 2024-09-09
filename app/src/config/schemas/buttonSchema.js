/**
 * Default schema for button objects, which can be extended or overridden.
 */
/**
 * @file buttonSchema.js
 * @description Defines the button schema object.
 * @module config/schemas/buttonSchema
 */

/**
 * The button schema object.
 * @type {Object}
 * @property {Object} element - The element properties of the button.
 * @property {string} element.className - The class name of the button element.
 * @property {Object} element.style - The style properties of the button element.
 * @property {string} element.style.backgroundColor - The background color of the button element.
 * @property {string} element.style.width - The width of the button element.
 * @property {string} element.style.height - The height of the button element.
 * @property {string} element.style.border - The border of the button element.
 * @property {Object} element.attributes - The attributes of the button element.
 * @property {string} element.attributes.type - The type attribute of the button element.
 * @property {string} element.attributes.title - The title attribute of the button element.
 * @property {Object} vertex - The vertex properties of the button.
 * @property {number} vertex.px - The x-coordinate of the button's position.
 * @property {number} vertex.py - The y-coordinate of the button's position.
 * @property {number} vertex.vx - The x-component of the button's velocity.
 * @property {number} vertex.vy - The y-component of the button's velocity.
 * @property {Object} events - The event handlers of the button.
 * @property {Function} events.onClick - The click event handler of the button.
 * @property {Function} events.onHover - The hover event handler of the button.
 */
export const buttonSchema = {
    element: {
        className: 'button',
        style: {
            backgroundColor: 'blue',
            width: '100px',
            height: '50px',
            border: '1px solid #ccc'
        },
        attributes: {
            type: 'button',
            src: ''
        }
    },
    vertex: {
        px: 0,
        py: 0,
        vx: 1,
        vy: 1
    },
    events: {
        onClick: () => console.log('Button clicked!'),
        onHover: () => console.log('Button hovered!')
    }
};
