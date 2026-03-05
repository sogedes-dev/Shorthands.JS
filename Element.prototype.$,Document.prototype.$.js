/**
 * Returns an element matching the selector if the last part of the selector starts with #
 * Otherwise returns all elements matching the selector in the subtree as array.
 * @method
 * @instance
 * @memberOf Element
 * @memberOf Document
 * @name $
 * @param selector {string} Selector to search for
 * @returns {Array|Element|null}
*/
Element.prototype.$=Document.prototype.$=function(sel){
  return /#[^\s>~|]+$/.exec(sel)?
    this.querySelector(sel):
    [...this.querySelectorAll(sel)]
};
