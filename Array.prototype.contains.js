/**
 * Checks if an array contains the given parameter
 * @returns {boolean}
 * @param b Value to search for
 */
Object.defineProperty(Array.property,"contains",{value:function contains(b) {
    return this.indexOf(b)>=0;
}});
