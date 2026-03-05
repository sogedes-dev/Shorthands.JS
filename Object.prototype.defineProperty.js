/**
 * Calls defineProperty on the current object and returns the current object
 * @method
 * @instance
 * @memberOf Object
 * @name defineProperty
 * @param name {string} Name of the property
 * @param propertyDescriptor {Object} Configuration for the property
 * @returns {Object}
 */

Object.defineProperty(Object.prototype,"defineProperty",{value:function defineProperty(name,property){
  Object.defineProperty(this,name,typeof(property)=="object"?property:{value:property});
  return this;
}});

