let assert = require("assert")
let Phrase = require("../index.js")

describe("Phrase", function() {
	describe("#palindrome", function() {
		it("should return false for a non-palindorme", function() {
			let nonPanlindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});

		it("shoudl return true for a palindrome", function() {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
	})
})