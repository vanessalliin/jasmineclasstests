import { ExampleClass , OverUnder} from '../classes.js'

describe("A suite of tests for classes.js", function () {
    it('tests for a class with a handleInput method that accepts a string argument and returns a string argument passed to the constructor', function () {
        let sPhoneNumber = "123-456-7890";
        let oExample = new ExampleClass(sPhoneNumber);
        expect(oExample.handleInput("You called from")).toMatch(sPhoneNumber);
    });
});

describe("Create an object that takes a number between 1 and 100 in it's constructor. Make and test a handleInput() method that takes a string argument and returns [\"higher\"], [\"lower\"] or [\"just right\"]. Create a test for each return value.", function(){
    it("tests for 27 being lower than 50", function(){
        let oOverUnder = new OverUnder(27);
        expect(oOverUnder.handleInput(50)).toEqual("lower");
    });
    it("tests for 27 being higher than 20", function(){
        let oOverUnder = new OverUnder(27);
        expect(oOverUnder.handleInput(20)).toEqual("higher");
    });
    it("tests for 27 being equal to 27", function(){
        let oOverUnder = new OverUnder(27);
        expect(oOverUnder.handleInput(27)).toEqual("just right");
    });
});

describe("Use the typeof operator from chapter 2 to change your constructor to choose a number randomly if one isn't supplied as an argument. Hint* math.ceil(math.random() * 100) returns a random number between 1 and 100.", function(){
    it("tests 27 being higher lower or equal to some random number", function(){
        let oOverUnder = new OverUnder();
        expect("higher, lower, just right").toContain(oOverUnder.handleInput(27));
    });
});
