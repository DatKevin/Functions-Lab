let pandigital = (number) => {
	/// Converts a number into an array to compare each individual digit
	let numberString = String(number)
	let split = numberString.split("")
	/// Number is pandigital till proven otherwise
	let isfalse = true
	/// Sorts all number in order
	let sortedNumber = split.slice().sort()
	/// Compares sorted numbers with an actual 1-n list. If there are differences
	/// isfalse is set to false to show it is not pandigital
		for (let i=1; i<split.length; i++) {
		if (sortedNumber[i-1] != String(i)) {
			isfalse = false
		} 
	}
	/// Checks for any 0s as any number with 0 is not 1 to n pandigital
	if (sortedNumber[0] == "0") {
		isfalse = false
	}
	if (isfalse == false) {
		console.log("The number is not pandigital")
	}
	else {
		console.log("The number is pandigital!")
	}

}
pandigital(231)
pandigital(942)
pandigital(0)
pandigital(987654321)
pandigital(120)