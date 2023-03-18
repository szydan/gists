const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('Usage: node character-counter.js FILEPATH');
    process.exit(1);
}
const filePath = process.argv[2];


function updateLetterCount(letterCount, letters) {
	// Iterate over the array of letters and count them
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

//Introduce and object to keep results
const letterCount = {};

const options = { bufferSize: 32 * 1024 };
const readableStream = fs.createReadStream(filePath, options);

readableStream.on('error', function (error) {
    console.log(`error: ${error.message}`);
});

readableStream.on('data', (chunk) => {
  const letters = chunk.toString().split('');
  updateLetterCount(letterCount, letters)
});

readableStream.on('end', (chunk) => {
  // print results in alphabetical order
  if (chunk) {
    const letters = chunk.toString().split('');
    updateLetterCount(letterCount, letters)
  }
  printResults(letterCount)
});
