module.exports = function duckCount () {
	var arr = [];
	 Array.prototype.slice.call(arguments).filter(function(a){		
		if (this.hasOwnProperty.call(a, 'quack') === true) {
			return arr.push(a);
		} else {
			return;
		}
	})
	 return arr.length;
};