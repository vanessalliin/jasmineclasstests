import { hello, kg2Lbs, convertDate, volume } from '../functions.js'

describe("A suite of tests for functions.js", function() {
    it('tests for a function named hello that returns "hello"', function() {
      let sHello = hello();
      expect(sHello).toEqual("hello");
    });
  });
  
describe("Write a function that converts kilograms to pounds and tests at least 3 conversions", function(){
  it("tests for 75 kg ", function() {
    expect(165.35).toEqual(kg2Lbs(75))
  });
  it("tests for 85 kg ", function() {
    expect(187.39).toEqual(kg2Lbs(85))
  });
  it("tests for 40 kg ", function() {
    expect(90.39).toEqual(kg2Lbs(41))
  });
});

describe("Write a function that converts a date in the form 2021-01-05 to a date January 5th, 2021.", function(){
  it("converts 2021-01-05 to January 5th, 2021", function(){
    expect("January 5th, 2021").toEqual(convertDate("2021-01-05")); 
  });
  it("converts 2021-02-01 to February 1st, 2021", function(){
    expect("February 1st, 2021").toEqual(convertDate("2021-02-01")); 
  });
  it("converts 2021-03-02 to March 2nd, 2021", function(){
    expect("March 2nd, 2021").toEqual(convertDate("2021-03-02")); 
  });
  it("converts 2021-04-03 to April 3rd, 2021", function(){
    expect("April 3rd, 2021").toEqual(convertDate("2021-04-03")); 
  });
});

describe("Write a function that converts the diameter of a sphere in meters to the volume of the sphere in cubic meters.", function(){
  it("converts a sphere 2 meters in diameter", function(){
    expect(4.19).toEqual(volume(2));
  });
  it("converts a sphere 5 meters in diameter", function(){
    expect(65.45).toEqual(volume(5));
  });
  it("converts a sphere 10 meters in diameter", function(){
    expect(523.6).toEqual(volume(10));
  });
});