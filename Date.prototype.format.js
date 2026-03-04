Date.prototype.format=function(str){
	return str.
		replace("yyyy",this.getFullYear().toString().padStart(4,'0')).
		replace("yy",this.getFullYear().toString().padStart(2,'0').substr(-2)).
		replace("MM",this.getMonth().toString().padStart(2,'0')).
		replace("dd",this.getDate().toString().padStart(2,'0')).
		replace("d",this.getDate().toString()).
		replace("HH",this.getHours().toString().padStart(2,'0')).
		replace("mm",this.getMinutes().toString().padStart(2,'0')).
		replace("ss",this.getSeconds().toString().padStart(2,'0'))
		;
};
