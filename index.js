fig = require("figlet")
r = require("readline")
pc = -1
cw = true
cards = []
o = {}
a = require("ascii-art")
b = "hi"
const createCard = function(corner, color) {
	// console.log(a.style("|------|\n" + "|"+ corner +"     |\n|      |\n|      |\n"+ "|     "+ corner  + "|\n|------|", (color + "_bg")))
	console.log(a.style("|------|"(color + "_bg")))
	if (!(corner == "draw")) {console.log(a.style("|"+ corner +"     |", (color + "_bg")))} else {console.log(a.style("|+4    |", (color + "_bg")))}
	console.log(a.style("|      |", (color + "_bg")))
	console.log(a.style("|      |", (color + "_bg")))
	if (!(corner == "draw")) {console.log(a.style("|     "+ corner +"|", (color + "_bg")))} else {console.log(a.style("|    +4|", (color + "_bg")))}
	console.log(a.style("|------|", (color + "_bg")))
	console.log(a.style("\n", "black_bg"))
}
rl = r.createInterface({
	input: process.stdin,
	output: process.stdout
})
x = function() {
	fig.text("Uno!", {
		font: "Doh"
	}, function(e, d) {
		if (e) console.log(e)
		console.log(d)
	})
	rl.question("Welcome to Uno! Please tell me your player's names, seperated by commas:\n", function(a) {
	p = a.split(",")
	for (i = 0; i < p.length; i++) {
		o[p[i]] = {
			cards: 7
		}
	}
		console.log(o)
		console.log("So you have " + p.length + " people, good. The order will be:\n" + p + "\nLets Play!")
	q()
})
}
q = function() {
	if (cw) {pc++} else {pc--}
	if (pc > p.length - 1) pc = 0
	if (pc == -1) pc = p.length -1
	rl.question("It is " + p[pc] + "'s turn, pick a card and type the outcome (e.g 'yellow 5' or 'green reverse' or 'draw four' or 'yellow +2' or 'blue skip'): ", function(a) {
		o[p[pc]].cards--
		a = a.toLowerCase()
		cards.push(a)
		a = a.split(" ")
		console.log(p[pc] + " placed a " + a[0] + " " + a[1] + ". " + p[pc] + " has " + o[p[pc]].cards + " cards left.")
		createCard(a[1], a[0])
		if (o[p[pc]].cards == 0) {
		fig.text((p[pc] + " wins!"), {font: "Doh"}, function(e, r) {
			if (e) console.log(e)
			console.log(r)
	} )}else {
		if (a[1] == "reverse") cw = false
		if (a[1] == "skip") { 
	if (cw) {pc++} else {pc--}
		}
		if (a[0] == "draw") {
	if (cw) {pc++} else {pc--}
	if (pc > p.length - 1) pc = 0
	if (pc == -1) pc = p.length -1
			o[p[pc]].cards += 4
			console.log(p[pc] + " now has " + o[p[pc]].cards + " cards")
	if (cw) {pc--} else {pc++}
		}
		q()}

	})
}
rl.question("Please give everyone playing 7 random Uno cards, then place the rest close to the middle. You will need to assign a name to everyone, which will be entered later on. Press enter when ready:", function() {
	x()
})
