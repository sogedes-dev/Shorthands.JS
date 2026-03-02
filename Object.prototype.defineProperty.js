Object.defineProperty(Object.prototype,"defineProperty",{value:function defineProperty(name,property){
  Object.defineProperty(this,name,typeof(property)=="object"?property:{value:property});
  return this;
}});

