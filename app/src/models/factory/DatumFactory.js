/**
 * Abstract factory class for creating Datum-related objects and their UI components.
 * This class should be extended by specific factories to create different types of Datum objects.
 */
export class DatumFactory {
    /**
     * Creates both a Datum object and its corresponding UI component.
     * 
     * @param {object} schema - The schema defining the object's properties.
     * @returns {Object} - An object containing both the Datum instance and the UI component.
     */
    create(schema) {
        const datum = this.createDatum(schema);
        const uiComponent = this.createUI(datum);
        return { datum, uiComponent };
    }

    /**
     * Abstract method for creating a Datum object.
     * Subclasses must implement this method.
     * 
     * @param {object} schema - The schema defining the object's properties.
     * @returns {Datum} - A new instance of a Datum object.
     */
    createDatum(schema) {
        throw new Error('createDatum() must be implemented by subclasses');
    }

    /**
     * Abstract method for creating a UI component for a Datum object.
     * Subclasses must implement this method.
     * 
     * @param {Datum} datum - The data object for which to create a UI component.
     * @returns {Object} - A new instance of a UI component.
     */
    createUI(datum) {
        throw new Error('createUI() must be implemented by subclasses');
    }
}