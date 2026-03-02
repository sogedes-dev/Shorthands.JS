/**
 * Returns all distinct values of an array
 */

Object.defineProperty(Array.prototype,"distinct",{value:function distinct() {
    return this.reduce((p,a)=>{
        if(p.indexOf(a)<0)
            p.push(a);
        return p;
    },[]);
}});
