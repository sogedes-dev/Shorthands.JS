/**
 * Returns all own keys of object
 * @method
 * @instance
 * @memberOf Object
 * @name keys
 * @returns {Array}
 */

Object.defineProperty(Object.prototype,"keys",{value:function keys(){
  return Object.keys(this);
}});
