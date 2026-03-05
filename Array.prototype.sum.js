/**
 * Returns the sum of all numbers in the array
 * @method
 * @instance
 * @memberOf Array
 * @name max
 * @returns {number}
 */

Object.defineProperty(Array.prototype,"sum",{value:function sum() {
    return this.reduce((p,n)=>p+n,0);
}});
