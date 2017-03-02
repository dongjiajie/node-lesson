function wait(time) {
	setTimeout(() => {
		console.log(Date.now());
	}, time);
}

async function series() {
	await wait(500);
	await wait(500);
	return "done!";
}

console.log(series());