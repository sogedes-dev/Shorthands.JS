Array.prototype.groupBy=function(args){
  args=[...arguments];
  
  var data=Object.groupBy(this,typeof(args[0])=="function"?args[0]:function(field,line){ return line[field]; }.bind(null,args[0]) );
  if(args.length>1)
    for(var i in data)
        data[i]=data[i].groupBy.apply(data[i],args.slice(1));
  return data;
};

Object.defineProperty(Array.prototype,"groupBy",{value:function groupBy(args) {
  args=[...arguments];
  
  var data=Object.groupBy(this,typeof(args[0])=="function"?args[0]:function(field,line){ return line[field]; }.bind(null,args[0]) );
  if(args.length>1)
    for(var i in data)
        data[i]=data[i].groupBy.apply(data[i],args.slice(1));
  return data;
}});
