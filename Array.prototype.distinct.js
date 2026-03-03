/**
 * Returns all distinct values of an array
 */

Object.defineProperty(Array.prototype,"distinct",{value:function distinct(serialize) {
    if(serialize){
        return this.map(a=>a.toJson()).distinct().map(a=>a.asJson());
    }else{
        return this.reduce((p,a)=>{
            if(p.indexOf(a)<0)
                p.push(a);
            return p;
        },[]);
    }
}});
