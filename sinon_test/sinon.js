function once(fn) {
	var returenValue, called = false;
	return function(){
		if(!called){
			called = true;
			returnValue = fn.apply(this, arguments);
		}
		return returnValue;
	};
}