Object.defineProperty(Object.prototype,"toJson",{value:function toJson(sep,flags){
  return JSON.stringify(this,sep,flags);
}});
