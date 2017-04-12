function Reader() {
  this.wordArray = [];
  this.occurences = { };
  this.occurencesWithPrime = { };
};

Reader.prototype.wordOccurences = function() {
  for (var i = 0; i < this.wordArray.length; i++) {
    if (typeof this.occurences[this.wordArray[i]] == "undefined")
    {
        this.occurences[this.wordArray[i]] = 1;
    } else {
      this.occurences[this.wordArray[i]]++;
    }
  }
};

Reader.prototype.isPrime = function(value) {
  var start = 2;
     while (start <= Math.sqrt(value)) {
       if (value % start++ < 1) return false;
     }
    return value > 1;
};

Reader.prototype.primeOccurences = function() {
  var reader = this;

  Object.keys(reader.occurences).forEach(function(key) {
    var objValue = reader.occurences[key];
    var isPrimeNumber = reader.isPrime(objValue);
    var arr = [objValue, isPrimeNumber];
    reader.occurencesWithPrime[key] = arr;
  });
};

Reader.prototype.arrayLengthCheck = function() {
  if (this.wordArray.length == 0) {
    console.log("Please enter a text file with text");
    process.exit();
  } else return false;
};

Reader.prototype.checkArguments = function(array, index) {
  if ((array.length == 2) && (index==1)) {
    console.log("Please enter an argument e.g. node src/Reader.js text.txt");
    return true;
  } else return false;
};

Reader.prototype.fileTypeCheck = function(val) {
  var val = val.substr(val.lastIndexOf('.') + 1);
  if (val != "txt") {
    console.log("Please use a file with the extention .txt");
    process.exit();
  } else return false;
};

Reader.prototype.isExistingFile = function(val, err) {
  if (err) {
    console.log(val, "- file does not exist");
    process.exit();
  };
};

Reader.prototype.formatWordArray = function(data) {
  console.log(data.toString());
  this.wordArray = data.toString()
                          .toLowerCase()
                          .replace(/[\n\r]/g, "")
                          .replace(/[^a-z\d\s]+/gi, "")
                          .split(" ")
                          .sort()
                          .filter(function(entry) { return entry.trim() != ''; });
};

var fs = require("fs");

process.argv.forEach(function (val, index, array) {
  var reader = new Reader();
  reader.checkArguments(array, index);

  if(index==2) {
    fs.readFile("./" + val, function read(err, data) {
      reader.isExistingFile(val, err);
      reader.fileTypeCheck(val);
      reader.formatWordArray(data);
      reader.arrayLengthCheck();
      reader.wordOccurences();
      reader.primeOccurences();

      console.log(reader.wordArray);
      console.log(reader.occurencesWithPrime);
    });
  };
});
