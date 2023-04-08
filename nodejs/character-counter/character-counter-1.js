const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('Usage: node character-counter.js FILEPATH');
    process.exit(1);
}

function updateLetterCount(letterCount, letters) {
	for (const letter of letters) {
	  if (letterCount[letter]) {
	    letterCount[letter]++;
	  } else {
	    letterCount[letter] = 1;
	  }
	}
}

function printResults(letterCount) {
	let orderedLetters = Object.keys(letterCount).sort()
	for (const letter of orderedLetters) {
	    console.log(letter + ":" + letterCount[letter])
	}
}

const filePath = process.argv[2];
const text = fs.readFileSync(filePath, 'utf8');

//Introduce and object (map) to keep the results
const letterCount = {};

// Split text into array of letters
const letters = text.split('');

// Iterate over the array of letters and count them
updateLetterCount(letterCount, letters)

// print the results in alphabetical order
printResults(letterCount)
