/**
 * Default schema for grid objects, which can be extended or overridden.
 * This schema defines properties for a grid (or canvas), including size, color, and layers.
 * Layers allow for multiple views (e.g., tabs) within the same canvas context.
 */
/**
 * @module gridSchema
 * @description Represents the configuration schema for a grid element.
 */

/**
 * @typedef {Object} GridElement
 * @property {string} className - The class name of the grid element.
 * @property {Object} style - The style properties of the grid element.
 * @property {string} style.width - The width of the grid element.
 * @property {string} style.height - The height of the grid element.
 * @property {string} style.backgroundColor - The background color of the grid element.
 * @property {string} style.border - The border of the grid element.
 * @property {Object} attributes - The attributes of the grid element.
 * @property {string} attributes.id - The ID of the grid element.
 * @property {string} attributes.role - The role of the grid element.
 */

/**
 * @typedef {Object} GridLayer
 * @property {string} id - The ID of the layer.
 * @property {string} name - The name of the layer.
 * @property {boolean} visible - Indicates whether the layer is visible or not.
 * @property {Array} objects - The objects assigned to this layer.
 */

/**
 * @typedef {Object} GridSchema
 * @property {GridElement} element - The grid element.
 * @property {Array<GridLayer>} layers - The layers of the grid.
 */

/**
 * Represents the configuration schema for a grid element.
 * @type {GridSchema}
 */
export const gridSchema = {
    element: {
        className: 'canvas',
        style: {
            width: '800px',
            height: '600px',
            backgroundColor: 'white',
            border: '1px solid #000'
        },
        attributes: {
            type: 'canvas',
            role: 'presentation',
        }
    },
    layers: [
        {
            id: 'layer-1',
            name: 'Main View',
            visible: true,
            objects: []  // Objects (e.g., buttons) assigned to this layer
        },
        {
            id: 'layer-2',
            name: 'Secondary View',
            visible: false,
            objects: []
        }
    ]
};
