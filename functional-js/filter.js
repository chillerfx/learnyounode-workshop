module.exports = function getShortMessages (msg) {
	var arr = [];
	
	 msg.filter(function(m) {
		if (m.message.length <  50) {
			return arr.push(m.message);		
		}
	}); 
	 return arr;
};