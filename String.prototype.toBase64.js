/**
 * Encodes the current string to base64
 * @method
 * @instance
 * @memberOf String
 * @name toBase64
 * @returns {String}
 */

String.prototype.toBase64=function(){
  return window.btoa(this);
};
