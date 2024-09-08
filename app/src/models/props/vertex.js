/**
 * Object literal represents a vertex struct to encapsulate the position and velocity data.
 * Avoids class instantiation since no non-mutator/-accessor methods are needed.
 * 
 * @param {number} px - The x position of the vertex. Default is 0.
 * @param {number} py - The y position of the vertex. Default is 0.
 * @param {number} vx - The x velocity of the vertex. Default is 0.
 * @param {number} vy - The y velocity of the vertex. Default is 0.
 * @returns {Object} - The vertex object. Constrains access to 'vertex' property.
 */
export const vertex = (px = 0, py = 0, vx = 0, vy = 0) => {
    return {
        vertex: {
            px: px,
            py: py,
            vx: vx,
            vy: vy
        }
    }
}