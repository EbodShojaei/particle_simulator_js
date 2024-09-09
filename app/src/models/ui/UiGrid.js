import { Observer } from '../../helpers/state/Observer.js';
import { UiObject } from './UiObject.js';

/**
 * Class representing a UI component for a simulated grid using a canvas element.
 * Extends the Observer class to update based on changes in observed subjects.
 */
export class UiGrid extends Observer {
    /**
     * Creates a new UiGrid instance.
     * 
     * @param {SimGrid} simGrid - The SimGrid instance to create a UI component for.
     */
    constructor(simGrid) {
        super();
        this.simGrid = simGrid;
        this.element = this.createElement(); // Create the canvas element based on SimGrid properties
    }

    /**
     * Creates a canvas element for the UI grid.
     * 
     * @returns {HTMLElement} - The created canvas element.
     */
    createElement() {
        const element = document.createElement('div');
        element.id = this.simGrid.id;
        element.className = this.simGrid.className;
        Object.assign(element.style, this.simGrid.style);
        element.style.position = 'relative'; // Ensure relative positioning for child elements

        // Render all child objects
        this.renderObjects();

        return element;
    }

    /**
     * Renders all objects in the grid on the canvas.
     */
    renderObjects() {
        const objects = this.simGrid.getAllObjects();
        objects.forEach(obj => {
            const uiObject = new UiObject(obj);
            this.addSubject(uiObject); // Add this grid as an observer to the UI object
            uiObject.appendTo(this.element);
        });
    }

    /**
     * Updates the UI grid based on the observed state.
     * 
     * @param {Object} state - The new state of the observed subject.
     */
    update(state) {
        const objElement = document.getElementById(state.id);
        if (objElement) {
            // Update the object's position on the grid
            objElement.style.transform = `translate3d(${state.vertex.px}px, ${state.vertex.py}px, 0)`;
        }
    }

    /**
     * Appends the UI grid to a specified parent.
     * 
     * @param {HTMLElement} parent - The parent element to which the UI grid should be appended.
     */
    appendTo(parent) {
        parent.appendChild(this.element);
    }
}
