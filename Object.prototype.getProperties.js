/**
 * Create a new object containing only the fields given
 * @method
 * @instance
 * @memberOf Object
 * @name getProperties
 * @param propName1 {string} Property name
 * @param propName2 {string} Property name
 * @param propNameN {string} Property name
 * @returns {Object}
 */

Object.defineProperty(Object.prototype,"getProperties",{value:function getProperties(args){
  var args=[...arguments];
  return Object.fromEntries(Object.entries(this).filter(a=>args.contains(a[0])));
}});
