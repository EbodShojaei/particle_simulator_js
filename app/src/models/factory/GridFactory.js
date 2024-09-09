import { DatumFactory } from './DatumFactory.js';
import { SimGrid } from '../obj/SimGrid.js';
import { UiGrid } from '../ui/UiGrid.js';

/**
 * Factory class for creating SimGrid and UiGrid instances.
 */
export class GridFactory extends DatumFactory {
    /**
     * Creates both a SimGrid and its corresponding UI component.
     * 
     * @param {object} schema - The schema defining the grid's properties.
     * @returns {Object} - An object containing both the SimGrid instance and the UiGrid.
     */
    create(schema = {}) {
        return super.create(schema);
    }

    /**
     * Creates a new SimGrid instance.
     * 
     * @param {object} schema - The schema defining the grid's properties.
     * @returns {SimGrid} - A new SimGrid instance.
     */
    createDatum(schema = {}) {
        return new SimGrid(schema);
    }

    /**
     * Creates a new UiGrid component for a given SimGrid.
     * 
     * @param {SimGrid} simGrid - The SimGrid instance to create a UI component for.
     * @returns {UiGrid} - A new UiGrid instance.
     */
    createUI(simGrid) {
        return new UiGrid(simGrid);
    }
}