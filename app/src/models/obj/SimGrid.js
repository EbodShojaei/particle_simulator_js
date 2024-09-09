import { Datum } from './Datum.js';
import { objectProps } from '../props/object.js';

/**
 * Class representing a grid that holds multiple objects on a canvas.
 */
export class SimGrid extends Datum {
    /**
     * Creates a new SimGrid instance.
     * 
     * @param {Object} params - The parameters for the grid.
     * @param {string} params.id - The unique identifier for the grid.
     * @param {string} params.className - The CSS class name for the grid.
     * @param {Object} params.style - The style properties for the grid.
     * @param {Object} params.attributes - The attributes for the grid.
     * @param {Array} params.layers - The layers of the grid.
     */
    constructor({ id, className, style, attributes, layers } = {}) {
        const gridProps = objectProps({ id, className, style, attributes });
        super(gridProps);

        this.layers = layers || []; // Initialize layers dynamically
        this.objects = {}; // A collection to hold objects added to the grid
    }

    /**
     * Adds an object to the grid.
     * 
     * @param {SimObject} object - The object to add to the grid.
     */
    addObject(object) {
        if (object && object.id) {
            this.objects[object.id] = object;
        } else {
            console.error('Invalid object: Must have a unique id');
        }
    }

    /**
     * Removes an object from the grid by its ID.
     * 
     * @param {string} id - The unique identifier of the object to remove.
     */
    removeObject(id) {
        if (this.objects[id]) {
            delete this.objects[id];
        } else {
            console.error(`No object found with id: ${id}`);
        }
    }

    /**
     * Gets an object from the grid by its ID.
     * 
     * @param {string} id - The unique identifier of the object.
     * @returns {SimObject|null} - The object with the specified ID or null if not found.
     */
    getObject(id) {
        return this.objects[id] || null;
    }

    /**
     * Returns all objects currently in the grid.
     * 
     * @returns {Array} - An array of all objects in the grid.
     */
    getAllObjects() {
        return Object.values(this.objects);
    }

    /**
     * Updates the grid style dynamically, allowing for responsive design.
     * 
     * @param {Object} newStyles - New style properties to merge with the existing styles.
     */
    updateGridStyle(newStyles) {
        const currentStyle = this.style;
        this.style = { ...currentStyle, ...newStyles };
    }

    /**
     * Converts the SimGrid to a JSON string for easy serialization.
     * 
     * @returns {string} - JSON representation of the SimGrid.
     */
    toJSON() {
        return JSON.stringify({
            id: this.id,
            className: this.className,
            style: this.style,
            attributes: this.attributes,
            objects: this.getAllObjects()
        });
    }
}