/**
 * Base class representing a generic data object in the system.
 */
export class Datum {
    /**
     * Creates a new Datum object based on the provided properties from the schema (if any).
     * 
     * @param {*} props - The properties of the Datum object defined by the schema.
     */
    constructor(props = {}) {
        // Assign all properties from the schema to this object
        Object.assign(this, props);
    }

    /**
     * Converts the Datum object to a JSON string.
     * @returns {string} - JSON representation of the Datum object.
     */
    toJSON() {
        return JSON.stringify(this);
    }
}