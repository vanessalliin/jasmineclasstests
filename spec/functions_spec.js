import { hello, calculateCoinTotal, fahrenheitToCelsius, cubeVolume, gymMembershipCost, earthquakeDamage } from '../functions.js'

describe("A suite of tests for functions.js", function() {

    it('tests for a function named hello that returns "hello"', function() {
        expect(hello()).toEqual("hello");
    });

    describe("Coin total calculation", function() {
        it("should return 0 when all coins are 0", function() {
            expect(calculateCoinTotal(0, 0, 0, 0, 0)).toEqual(0);
        });
        it("should correctly calculate the total for one of each coin", function() {
            // 0.05 + 0.10 + 0.25 + 1.00 + 2.00 = 3.40
            expect(calculateCoinTotal(1, 1, 1, 1, 1)).toEqual(3.4);
        });
        it("should correctly calculate the total for arbitrary counts", function() {
            // (2 * 0.05) + (3 * 0.10) + (4 * 0.25) + (5 * 1.00) + (6 * 2.00) = 18.4
            expect(calculateCoinTotal(2, 3, 4, 5, 6)).toEqual(18.4);
        });
    });

    describe("Temperature conversion", function() {
        it("converts freezing temperature (32°F) to 0°C", function() {
            expect(fahrenheitToCelsius(32)).toEqual(0);
        });
        it("converts boiling temperature (212°F) to 100°C", function() {
            expect(fahrenheitToCelsius(212)).toEqual(100);
        });
        it("converts room temperature (70°F) to approximately 21.11°C", function() {
            expect(fahrenheitToCelsius(70)).toBeCloseTo(21.11, 2);
        });
    });

    describe("Cube volume calculation", function() {
        it("should return 0 when the height is 0", function() {
            expect(cubeVolume(0)).toEqual(0);
        });
        it("should return 1 when the height is 1", function() {
            expect(cubeVolume(1)).toEqual(1);
        });
        it("should return 8 when the height is 2", function() {
            expect(cubeVolume(2)).toEqual(8);
        });
    });

    describe("Gym membership cost calculation", function() {
        const baseCost = 100;
        it("should apply 5% discount for 1 friend", function() {
            expect(gymMembershipCost(baseCost, 1)).toEqual(95);
        });
        it("should apply 10% discount for 2 friends", function() {
            expect(gymMembershipCost(baseCost, 2)).toEqual(90);
        });
        it("should apply 15% discount for 3 friends", function() {
            expect(gymMembershipCost(baseCost, 3)).toEqual(85);
        });
        it("should apply 15% discount for 4 friends", function() {
            expect(gymMembershipCost(baseCost, 4)).toEqual(85);
        });
    });

    describe("Earthquake damage determination", function() {
        it("should return 'Very little or no damage at all' for intensity less than 5", function() {
            expect(earthquakeDamage(4.9)).toEqual("Very little or no damage at all");
        });
        it("should return 'There may be some damage' for intensity between 5 and 5.5", function() {
            expect(earthquakeDamage(5)).toEqual("There may be some damage");
        });
        it("should return 'There is serious damage: walls may crack, break or fall' for intensity between 5.5 and 6.5", function() {
            expect(earthquakeDamage(6)).toEqual("There is serious damage: walls may crack, break or fall");
        });
        it("should return 'Disaster and buildings may collapse' for intensity between 6.5 and 7.5", function() {
            expect(earthquakeDamage(7)).toEqual("Disaster and buildings may collapse");
        });
        it("should return 'Catastrophe and most buildings destroyed' for intensity 7.5 and above", function() {
            expect(earthquakeDamage(7.5)).toEqual("Catastrophe and most buildings destroyed");
            expect(earthquakeDamage(8)).toEqual("Catastrophe and most buildings destroyed");
        });
    });
});
