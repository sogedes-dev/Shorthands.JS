/**
 * Json stringifies current object
 * @method
 * @instance
 * @memberOf Object
 * @name toJson
 * @param replacer {function} Replacer
 * @param Spacer {string} Space
 * @returns {string}
 */
Object.defineProperty(Object.prototype,"toJson",{value:function toJson(repl,spc){
  return JSON.stringify(this,repl,spc);
}});
