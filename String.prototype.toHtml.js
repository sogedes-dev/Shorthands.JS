/**
 * Encodes the current String as HTML
 * @method
 * @instance
 * @memberOf String
 * @name toHtml
 * @returns {string}
 */

String.prototype.toHtml=function(){
    var s=document.createElement("span");
    s.textContent=this;
    return s.innerHTML;
}
