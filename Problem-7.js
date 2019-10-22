let calculate = (x, y, operation) => {
	if ((typeof(y) == 'number') && (typeof(x) == 'number')) {
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
	else if (y == "sqrt") {
		console.log(x**(1/2))
	}
	else {
		console.log("Not a valid operation")
	}
}

calculate(24,10,"divide")
calculate(25,"sqrt")
calculate(20,"sqrt")
calculate("Not a number",20,"add")