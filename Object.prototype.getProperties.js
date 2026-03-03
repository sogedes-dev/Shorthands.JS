Object.defineProperty(Object.prototype,"getProperties",{value:function getProperties(name,property){
  var args=[...arguments];
  return Object.fromEntries(Object.entries(this).filter(a=>args.contains(a[0])));
}});
