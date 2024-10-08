/**
 * Object literal represents a vertex struct to encapsulate the position and velocity data.
 * Avoids class instantiation since no non-mutator/-accessor methods are needed.
 * 
 * @param {number} px - The x position of the vertex. Default is 0.
 * @param {number} py - The y position of the vertex. Default is 0.
 * @param {number} vx - The x velocity of the vertex. Default is 0.
 * @param {number} vy - The y velocity of the vertex. Default is 0.
 * @returns {Object} - The vertex object.
 */
export const vertexProps = (px = 0, py = 0, vx = 0, vy = 0) => {
    // Directly define the vertex properties
    let _px = px;
    let _py = py;
    let _vx = vx;
    let _vy = vy;

    // Return an object with getters and setters for the vertex properties
    return {
        get px() {
            return _px;
        },
        set px(value) {
            _px = value;
        },
        get py() {
            return _py;
        },
        set py(value) {
            _py = value;
        },
        get vx() {
            return _vx;
        },
        set vx(value) {
            _vx = value;
        },
        get vy() {
            return _vy;
        },
        set vy(value) {
            _vy = value;
        }
    };
};
