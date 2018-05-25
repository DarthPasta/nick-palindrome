let Phrase = require("mhartl-palindrome");

function palindromeTester() {
	let string = prompt("Please enter a string for palindrome testing:");
	let phrase = new Phrase(string);
	let palindromeResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = "<strong>" + `"${phrase.content}" is a palindrome!` + "</strong>";
	} else {
		palindromeResult.innerHTML = "<strong>" + `"${phrase.content}" is not a palindrome!` + "</strong>";
	}
}

document.addEventListener("DOMContentLoaded", function() {

	let button = document.querySelector("#palindromeTester");

	button.addEventListener("click", function() {
		palindromeTester();
	});
})