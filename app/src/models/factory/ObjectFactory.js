import { DatumFactory } from './DatumFactory.js';
import { SimObject } from '../obj/SimObject.js';
import { UiObject } from '../ui/UiObject.js';
import { buttonSchema } from '../../config/schemas/buttonSchema.js';

/**
 * Factory class for creating SimObject and UiObject instances.
 */
export class ObjectFactory extends DatumFactory {
    /**
     * Creates both a SimObject and its corresponding UI component.
     * 
     * @param {object} schema - The schema defining the object's properties.
     * @returns {Object} - An object containing both the SimObject instance and the UiObject.
     */
    create(schema = {}) {
        const { datum, uiComponent } = super.create({ ...buttonSchema, ...schema });
        return { datum, uiComponent };
    }

    /**
     * Creates a new SimObject instance.
     * 
     * @param {object} schema - The schema defining the object's properties.
     * @returns {SimObject} - A new SimObject instance.
     */
    createDatum(schema = {}) {
        return new SimObject(schema);
    }

    /**
     * Creates a new UiObject component for a given SimObject.
     * 
     * @param {SimObject} simObject - The SimObject instance to create a UI component for.
     * @returns {UiObject} - A new UiObject instance.
     */
    createUI(simObject) {
        return new UiObject(simObject);
    }
}