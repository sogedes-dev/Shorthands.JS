Object.defineProperty(Array.prototype,"joinLeft",{value:function joinLeft(arr,match) {
    return this.map(a=>[a,arr.filter(b=>match(a,b))]);
}});
