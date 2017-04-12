describe("Reader", function() {
  var reader = new Reader();

  describe("on initialization", function(){
    it("has an empty wordArray", function(){
      expect(reader.wordArray).toEqual([]);
    })
    it("has an empty occurences variable", function(){
      expect(reader.occurences).toEqual({});
    })
    it("has an empty occurencesWithPrime variable", function(){
      expect(reader.occurencesWithPrime).toEqual({});
    })
  })

  describe("#formatWordArray", function(){
    it("ensures there is no whitespace", function(){
      data = "  hi,()// '' there  ";
      reader.formatWordArray(data);
      expect(reader.wordArray).toEqual(["hi", "there"]);
    })
  })

  describe("#arrayLengthCheck", function(){
    it("checks array length is more than 0", function(){
      reader.wordArray = ["Ben"];
      expect(reader.arrayLengthCheck()).toEqual(false)
    })
  })

  describe("#checkArguments", function(){
    it("returns true when running script with an argument", function(){
      array = [1,2]
      index = 1
      expect(reader.checkArguments(array, index)).toEqual(true)
    })
    it("returns false when running script without an argument", function(){
      array = [2]
      index = 0
      expect(reader.checkArguments(array, index)).toEqual(false)
    })
  })

  describe("#fileTypeCheck", function(){
    it("returns true if file type is txt", function(){
      val = "txt"
      expect(reader.fileTypeCheck(val)).toEqual(false)
    })
  })

  describe("#wordOccurences", function(){
    it("converts wordArray to Object with the word", function(){
      reader.wordArray = ["Ben", "Ben", "Dave"];
      reader.wordOccurences();
      expect(reader.occurences).toEqual({"Ben" : 2, "Dave" : 1});
    })
  })

  describe("#isPrime", function(){
    it("checks if 1 is prime number", function(){
      expect(reader.isPrime(1)).toEqual(false);
    })
    it("checks if 2 is prime number", function(){
      expect(reader.isPrime(2)).toEqual(true);
    })
    it("checks if 4 is prime number", function(){
      expect(reader.isPrime(4)).toEqual(false);
    })
  })

  describe("#primeOccurences", function(){
    it("assigns isPrime flag to primeOccurences object", function(){
      reader.primeOccurences();
      expect(reader.occurencesWithPrime).toEqual({"Ben": [ 2, true ],"Dave": [ 1, false ]})
    })
  })
})
