/**
 * Groups an array into a nested tree meaning for each param the array that would be an array turns itself into a value:results dictionary
 * @method
 * @instance
 * @memberOf Array
 * @name joinLeft
 * @returns {Array}
 * @param secondArray {Array} Array to be joined
 * @param matcher {function} A callback to be called with each line of self (with params(selfLine,secondArrayLine)) to determine a match
 */
Object.defineProperty(Array.prototype,"joinLeft",{value:function joinLeft(arr,match) {
    return this.map(a=>[a,arr.filter(b=>match(a,b))]);
}});
