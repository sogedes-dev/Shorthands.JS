Object.prototype.defineProperty=function(name,property){
  Object.defineProperty(this,name,typeof(property)=="object"?property:{value:property});
  return this;
};
