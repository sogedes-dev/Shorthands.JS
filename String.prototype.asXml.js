/**
 * Parses the current string as xml and returns the document xml
 * @method
 * @instance
 * @memberOf String
 * @name asXml
 * @returns {Element}
 */

String.prototype.asXml=function(){
    return (new DOMParser().parseFromString(this, "application/xml")).documentElement;
};
