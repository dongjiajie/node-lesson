class Sub{
	static sub(a, b) {
		if (a > b) {
			return a - b;
		} else {
			return b - a;
		}
	}
}

module.exports = Sub;