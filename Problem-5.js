let chess = () => {
	for (let i = 1; i <= 8; i++) {
		if (i % 2 == 0) {
			console.log("# # # # ")
		}
		else {
			console.log(" # # # #")
		}
	}
}
chess()