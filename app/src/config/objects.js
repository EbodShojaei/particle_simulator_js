import { buttonSchema } from '../config/schemas/buttonSchema.js';
import { gridSchema } from '../config/schemas/gridSchema.js';

/**
 * This file contains the configuration for active schemas.
 * 
 * @type {Object}
 * @property {Object} activeSchemas - The active schemas.
 * @property {Object} activeSchemas.gridSchema - The grid schema object.
 * @property {Object} activeSchemas.buttonSchema - The button schema object.
 */
export const activeSchemas = {
    gridSchema,
    buttonSchema
};