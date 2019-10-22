let boardMaker = (height,width) => {
	for (let i = 1; i <= height; i++) {
		if (i % 2 == 0) {
			let line = ""
			for (let i = 1; i <= width; i++) {
				if (i % 2 == 0) {
					line += " "
				}
				else {
					line += "#"
				}
			}
			console.log(line)
		}
		else {
			let line = ""
			for (let i = 1; i <= width; i++) {
				if (i % 2 == 0) {
					line += "#"
				}
				else {
					line += " "
				}
			}
			console.log(line)
		}
	}
}
boardMaker(4,10)