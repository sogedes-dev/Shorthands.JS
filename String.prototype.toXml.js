/**
 * Parses the current string as XML and returns the documentElement
 * @method
 * @instance
 * @memberOf String
 * @name toXml
 * @returns {Element}
 */

String.prototype.toXml=function(){
    return (new DOMParser().parseFromString(this, "application/xml")).documentElement;
};
