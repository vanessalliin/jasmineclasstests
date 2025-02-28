import { hello, squareFeetToAcres, mowTime, getAirQualityCategory, yee_ha, slope } from '../functions.js'

describe("A suite of tests for functions.js", function() {
    it('tests for a function named hello that returns "hello"', function() {
      let sHello = hello();
      expect(sHello).toEqual("hello");
    });

    it('converts 43560 square feet to 1 acre', function() {
      expect(squareFeetToAcres(43560)).toEqual(1);
    });

    it('converts 87120 square feet to 2 acres', function() {
      expect(squareFeetToAcres(87120)).toEqual(2);
    });

    it('converts 21780 square feet to 0.5 acre', function() {
      expect(squareFeetToAcres(21780)).toEqual(0.5);
    });

    it('calculates mowing time for a 10m x 20m lawn at 5 m²/min (should take 40 minutes)', function() {
      expect(mowTime(10, 20, 5)).toEqual(40);
    });
    it('calculates mowing time for a 5m x 10m lawn at 2 m²/min (should take 25 minutes)', function() {
      expect(mowTime(5, 10, 2)).toEqual(25);
    });
    it('calculates mowing time for a 15m x 15m lawn at 3 m²/min (should take 75 minutes)', function() {
      expect(mowTime(15, 15, 3)).toEqual(75);
    });

    it('returns "Good" for AQI 25', function() {
      expect(getAirQualityCategory(25)).toEqual("Good");
    });
    it('returns "Moderate" for AQI 75', function() {
      expect(getAirQualityCategory(75)).toEqual("Moderate");
    });
    it('returns "Unhealthy for Sensitive Groups" for AQI 125', function() {
      expect(getAirQualityCategory(125)).toEqual("Unhealthy for Sensitive Groups");
    });
    it('returns "Unhealthy" for AQI 175', function() {
      expect(getAirQualityCategory(175)).toEqual("Unhealthy");
    });
    it('returns "Very Unhealthy" for AQI 250', function() {
      expect(getAirQualityCategory(250)).toEqual("Very Unhealthy");
    });
    it('returns "Hazardous" for AQI 350', function() {
      expect(getAirQualityCategory(350)).toEqual("Hazardous");
    });

    it('returns "Yee" when the number is divisible by 3 but not 7', function() {
      expect(yee_ha(9)).toEqual("Yee");
    });
    it('returns "Ha" when the number is divisible by 7 but not 3', function() {
      expect(yee_ha(14)).toEqual("Ha");
    });
    it('returns "Yee Ha" when the number is divisible by both 3 and 7', function() {
      expect(yee_ha(21)).toEqual("Yee Ha");
    });
    it('returns "Nada" when the number is not divisible by 3 or 7', function() {
      expect(yee_ha(10)).toEqual("Nada");
    });

    // Slope tests:
    // Test 1: Simple positive slope: (1,1) to (2,2) -> slope = 1
    it('calculates the slope of a line from (1,1) to (2,2) as 1', function() {
      expect(slope(1, 1, 2, 2)).toEqual(1);
    });
    // Test 2: Another line: (2,3) to (4,7) -> slope = (7-3)/(4-2) = 2
    it('calculates the slope of a line from (2,3) to (4,7) as 2', function() {
      expect(slope(2, 3, 4, 7)).toEqual(2);
    });
    // Test 3: Vertical line: (1,1) to (1,4) -> run = 0, slope should be Infinity
    it('calculates the slope of a vertical line from (1,1) to (1,4) as Infinity', function() {
      expect(slope(1, 1, 1, 4)).toEqual(Infinity);
    });
});
