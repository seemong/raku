function bar(x, y) {
	return x + y + foobar(44);
}

function foobar(z) {
	return z / 46;
}

console.log(bar(5, 6));
