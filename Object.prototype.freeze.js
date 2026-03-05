/**
 * Calls freeze on the current object to turn it write protcted and returns the current object
 * @method
 * @instance
 * @memberOf Object
 * @name freeze
 * @returns {Object}
 */

Object.defineProperty(Object.prototype,"freeze",{value:function freeze(){
  return Object.freeze(this);
}});
