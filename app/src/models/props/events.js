/**
 * Object literal represents event handlers for a generic object.
 * Supports JavaScript behaviors for user interactions such as clicks.
 * 
 * @param {function} onClick - Function to handle click events.
 * @param {function} onHover - Function to handle hover events.
 * @returns {Object} - An object containing the event handlers.
 */
export const eventsProps = (onClick = () => { }, onHover = () => { }) => {
    // Directly define the event handler properties
    let _onClick = onClick;
    let _onHover = onHover;

    // Return an object with getters and setters for the event handlers
    return {
        get onClick() {
            return _onClick;
        },
        set onClick(value) {
            _onClick = value;
        },
        get onHover() {
            return _onHover;
        },
        set onHover(value) {
            _onHover = value;
        }
    };
};
