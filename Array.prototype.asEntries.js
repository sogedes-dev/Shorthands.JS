/**
 * Returns all own properties of an object as an Array of name<->value pairs
 * @alias Array.prototype.asEntries
 * @returns [{string} name,{object} value][]
 */
Object.defineProperty(Array.prototype,"asEntries",{value:function asEntries() {
    return Object.fromEntries(this);
}});
