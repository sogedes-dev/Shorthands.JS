/** @class Array */

/**
 * Returns all own properties of an object as an Array of name<->value pairs
 * @method
 * @instance
 * @memberOf Array
 * @name asEntries
 */

Array.prototype.asEntries = function asEntries() {
    return Object.fromEntries(this);
};

Object.defineProperty(Array.prototype,"asEntries",{enumerable:false})

