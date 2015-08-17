describe("Javabuzz", function() {
  var javabuzz;


  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  it("should return false if not divisible by 3", function() {
    expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
  });

  it("should return true if divisible by 3", function() {
    expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
  });

  it("should return false if not divisible by 5", function() {
    expect(javabuzz.isDivisibleByFive(7)).toEqual(false);
  });

  it("should return true if divisible by 5", function () {
    expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
  });

  it("should return false if not divisible by 15", function() {
    expect(javabuzz.isDivisibleByFifteen(7)).toEqual(false);
  });

  it("should return true if divisible by 15", function() {
    expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
  });

  it("Java when number is divisible by 3", function() {
    expect(javabuzz.says(3)).toEqual('Java');
  });

  it("Buzz when number is divisible by 5", function() {
    expect(javabuzz.says(5)).toEqual('Buzz');
  });


});
