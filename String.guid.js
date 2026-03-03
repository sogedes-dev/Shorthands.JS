String.guid = function(){
  return Array.prototype.slice.call(crypto.getRandomValues(new Uint8Array(16))).map(a=>("0"+a.toString(16)).slice(-2)).join("");
};
