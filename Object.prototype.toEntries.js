/**
 * Returns all own properties as Array of 2 entry name,value arrays
 * @method
 * @instance
 * @memberOf Object
 * @name toEntries
 * @returns {Array}
 */
Object.defineProperty(Object.prototype,"toEntries",{value:function toEntries(){
  return Object.entries(this);
}});
