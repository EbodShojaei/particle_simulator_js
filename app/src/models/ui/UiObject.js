import { Subject } from '../../helpers/state/Subject.js';

/**
 * Class representing a UI component for a simulated object on the canvas.
 * Extends the Subject class to notify observers of changes in state.
 */
export class UiObject extends Subject {
    /**
     * Creates a new UIObject instance.
     * 
     * @param {SimObject} simObject - The SimObject instance to create a UI component for.
     */
    constructor(simObject) {
        super();
        this.simObject = simObject;
        this.element = this.createElement(); // Create the UI element based on SimObject properties
    }

    /**
     * Creates an HTML element for the UI object using translate3d for positioning.
     * 
     * @returns {HTMLElement} - The created HTML element.
     */
    createElement() {
        const element = document.createElement('div');
        element.id = this.simObject.id;
        element.className = this.simObject.className;
        Object.assign(element.style, this.simObject.style);
        element.style.width = '10em';
        element.style.height = '5em';
        element.style.position = 'absolute'; // Ensure absolute positioning for movement

        // Attach event listeners
        if (this.simObject.events) {
            if (this.simObject.events.onClick) {
                element.addEventListener('click', this.simObject.events.onClick);
            }
            if (this.simObject.events.onHover) {
                element.addEventListener('mouseover', this.simObject.events.onHover);
            }
        }

        // Use translate3d for positioning
        element.style.transform = `translate3d(${this.simObject.vertex.px}px, ${this.simObject.vertex.py}px, 0)`;

        return element;
    }

    /**
     * Sets the new position and notifies observers.
     * 
     * @param {number} px - The new x-coordinate.
     * @param {number} py - The new y-coordinate.
     */
    setPosition(px, py) {
        this.simObject.vertex.px = px;
        this.simObject.vertex.py = py;
        this.setState({ id: this.simObject.id, vertex: this.simObject.vertex }); // Notify observers of the change
    }

    /**
     * Appends this UI object to the specified parent element.
     * 
     * @param {HTMLElement} parent - The parent element to which the UI object should be appended.
     */
    appendTo(parent) {
        parent.appendChild(this.element);
    }
}
