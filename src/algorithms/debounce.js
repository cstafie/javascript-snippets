

let heavyFn = function(y) {
	console.log('hello', y);
}


var debounce = function(func, delay, asap=false) {
	var timeout;


	return function() {
		console.log('called');
		let context = this, args = arguments;

		let delayed = function() {
			if (!asap) {
				console.log('executed');
				func.apply(context, args);
			}
			timeout = null;
		}

		if (timeout) {
			clearTimeout(timeout);
		} else if (asap) {
			console.log('executed asap')
			console.log(args);
			func.apply(context, args);
		}

		timeout = setTimeout(delayed, delay);
	}
}


let lightFn = debounce(heavyFn, 200, false);

for (let i = 0; i < 10; i++) {
	setTimeout(() => lightFn(i), i*210);
}






