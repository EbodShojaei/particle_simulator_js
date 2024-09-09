/**
 * Object literal represents a generic object configuration schema.
 * Supports attributes that can be parsed to CSS classes, HTML element properties, and JavaScript behaviors.
 * Access to properties is constrained through getters and setters.
 * 
 * @param {string} id - Unique identifier for the object.
 * @param {string} className - CSS class name(s) for styling.
 * @param {object} style - Inline styles.
 * @param {object} attributes - HTML attributes (like type or src attributes).
 * @returns {Object} - A fully defined object literal following the schema with constrained access.
 */
export const objectProps = ({
    id,
    className = 'default-object',
    style = {},
    attributes = {}
}) => {
    // Directly define the properties
    let _id = id;
    let _className = className;
    let _style = { ...style };
    let _attributes = { ...attributes };

    // Return an object with getters and setters to provide controlled access to the properties
    return {
        get id() {
            return _id;
        },
        set id(value) {
            _id = value;
        },
        get className() {
            return _className;
        },
        set className(value) {
            _className = value;
        },
        get style() {
            return _style;
        },
        set style(value) {
            _style = { ..._style, ...value };
        },
        get attributes() {
            return _attributes;
        },
        set attributes(value) {
            _attributes = { ..._attributes, ...value };
        }
    };
};
