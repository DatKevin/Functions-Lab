let pandigital = (number) => {
	/// Converts a number into an array to compare each individual digit
	let numberString = String(number)
	let split = numberString.split("")
	/// Compares each number by index. If it's a new number, store it in an array called numberBox.
	/// If there is a copy of that number in the existing numberBox array, instantly return false
	let isfalse = true
	let numberBox = []
	/*for (let i=0; i<split.length; i++) {
		/// removes the number from the array and then attempts to find the number within the remaining array
		let lookingFor = split[i]
		split.shift()
		numberChecker = split.prototype.find(lookingFor)
		if (numberChecker == true) {
			return isfalse = false
		}
	}
	*/
	for (let i=0; i<split.length; i++) {
		if (split[i] in numberBox) {
			isfalse = false
			console.log(false)

		} 
		else {
			numberBox[i] = split[i]
			console.log(numberBox)
		} 
	}
	if (isfalse == false) {
		console.log("The number is not pandigital")
	}
	else {
		console.log("The number is pandigital!")
	}

}
pandigital(248709)
pandigital(999)