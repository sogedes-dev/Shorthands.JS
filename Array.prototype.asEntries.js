Object.defineProperty(Array.prototype,"asEntries",{value:function asEntries() {
    return Object.fromEntries(this);
}});
