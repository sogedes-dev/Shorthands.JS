/**
 * Returns all own properties of an object as an Array of name<->value pairs
 * @alias Array.prototype.asEntries
 * @returns [{string} name,{object} value][]
 */
Array.prototype.asEntries = function asEntries() {
    return Object.fromEntries(this);
};

Object.defineProperty(Array.prototype,"asEntries",{enumerable:false}) 
