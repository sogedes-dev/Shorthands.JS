/**
 * Returns either the element matching the selector or if it doesn't a promise to be fullfiled when an element matching the selector appears
 * @method
 * @instance
 * @memberOf Element
 * @memberOf Document
 * @name querySelectorAsync
 * @param selector {string} Selector to search for
 * @returns {Element|Promise<Element>}
*/
Element.prototype.querySelectorAsync=async function(selector){
	var initial=this.querySelector(selector);
	if(initial)
	  return initial;
	
	return new Promise(function(done,abort){
		new MutationObserver(function(selector,mutationList, observer){
			var r=this.querySelector(selector);
			if(r){
				observer.disconnect();
				done(r);
			}
		}.bind(this,selector)).observe(this, { attributes: true, childList: true, subtree: true });
	}.bind(this));
};

Document.prototype.querySelectorAsync=async function(selector){
	return this.documentElement.querySelectorAsync(selector);
};
