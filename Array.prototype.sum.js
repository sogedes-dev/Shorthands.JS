Object.defineProperty(Array.prototype,"sum",{value:function sum() {
    return this.reduce((p,n)=>p+n,0);
}});
