let calculate = (x, y, operation) => {
	if (operation == "add") {
		console.log (x + y)
	}
	else if (operation == "substract") {
		console.log (x-y)
	}
	else if (operation == "multiply") {
		console.log (x*y)
	}
	else if (operation == "divide") {
		console.log (x/y)
	}
	else {
		console.log("Not a valid operation")

	}
}

calculate(24,10,"divide")