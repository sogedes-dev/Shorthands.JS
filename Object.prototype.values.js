/**
 * Returns all own values of object
 * @method
 * @instance
 * @memberOf Object
 * @name values
 * @returns {Array}
 */

Object.defineProperty(Object.prototype,"values",{value:function values(){
  return Object.values(this);
}});
