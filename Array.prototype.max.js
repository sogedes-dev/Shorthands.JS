/**
 * Returns the highest value in the array
 * @method
 * @instance
 * @memberOf Array
 * @name max
 * @returns {number}
 */

Object.defineProperty(Array.prototype,"max",{value:function max() {
    return Math.max(...this);
}});
