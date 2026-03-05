/**
 * Parses the current string as JSON
 * @method
 * @instance
 * @memberOf String
 * @name asJson
 * @returns {object}
 */

String.prototype.asJson=function(){
    return JSON.parse(this);
};
