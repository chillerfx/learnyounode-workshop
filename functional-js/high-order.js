module.exports = function repeat (fn, num) {
	if (num == 0) return;
	fn();
	return repeat(fn, --num)
};