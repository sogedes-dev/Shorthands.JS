/**
 * Decodes the current string as base64
 * @method
 * @instance
 * @memberOf String
 * @name asBase64
 * @returns {string}
 */

String.prototype.asBase64=function(){
  return window.atob(this);
};
