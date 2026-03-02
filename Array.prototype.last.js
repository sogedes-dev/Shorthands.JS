/*
    Returns the last element of an array with optional filtering and default value
 */
Object.defineProperty(Array.prototype,"last",{value:function last(filter,def) {
    if(filter)
        var r= this.filter(filter);
    else
        var r=this;
    return r.length?r[r.length-1]:def;
}});
