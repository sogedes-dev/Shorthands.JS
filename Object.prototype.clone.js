/**
 * Returns a structured clone of the current object
 * @method
 * @instance
 * @memberOf Object
 * @name clone
 * @returns {Object}
 */

Object.defineProperty(Object.prototype,"clone",{value:function clone(name,property){
  return window.structuredClone(this);
}});


