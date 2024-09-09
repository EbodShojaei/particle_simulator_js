import { Datum } from './Datum.js';
import { vertexProps } from '../props/vertex.js';
import { objectProps } from '../props/object.js';
import { eventsProps } from '../props/events.js';

/**
 * Class representing a simulated object in the system.
 */
export class SimObject extends Datum {
    /**
     * Creates a new SimObject instance.
     * 
     * @param {Object} params - The parameters for the simulated object.
     * @param {string} params.id - The unique identifier for the object.
     * @param {string} params.className - The CSS class name for the object.
     * @param {Object} params.style - The style properties for the object.
     * @param {Object} params.attributes - The attributes for the object.
     * @param {Object} params.vertex - The vertex properties for the object.
     * @param {Object} params.events - The event handlers for the object.
     */
    constructor({ id, className, style, attributes, vertex, events }) {
        super(objectProps({ id, className, style, attributes }));

        this.vertex = vertex ? vertexProps(vertex.px, vertex.py, vertex.vx, vertex.vy) : null;
        this.events = events ? eventsProps(events.onClick, events.onHover) : null;
    }
}