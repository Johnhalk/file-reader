# Text File Reader
by Ben Vaughan-Jones

A Javascript application which takes a txt file argument in the command line and outputs how many times the word occurs and if it is a prime number.

**User Stories**
```
As a user, I want to print out the text in a file,
so I can see the number of times a word appears in the file.
```
```
As a user, I want to be able to see if the number of times a word appears is a prime number,
so I can check if it is only divisible by itself and 1.
```

### Instructions
- Save any txt files to the root of the project folder
- `cd file-reader-bvj`
- `npm install`
- run `node src/Reader.js text.txt` (created text.txt to display all of the text in the file)
- run `node src/Reader.js rail.txt` (too much text to be displayed in command line but functionality still works)

**To run the tests**
- run `npm test`

**Edge Cases**
- run `node src/Reader.js empty.txt` (this is an empty text file for the purpose of throwing an error)
- run `node src/Reader.js text.pdf` (this is for the purpose of throwing an error if file isn't .txt extension)
- run `node src/Reader.js` (this will throw an error due to no arguments being passed with the Reader.js file)

### Successes
- Fully functional application as per the requirements.
- Good test coverage.
- AGILE approach, started with most basic MVP and iterated through.
- Well extracted features.
- Most edge cases tested.

### Struggles
- How complex should the application be i.e. React app, front end to allow user input etc.
- Using Jasmine and ES6 syntax together.
- Accessing "this" from within Object.keys for loop.

### Technologies Used
- Vanilla Javascript
- Node.js
- Jasmine
