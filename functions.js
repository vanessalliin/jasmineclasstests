function hello(){
    return "hello";
}

function squareFeetToAcres(squareFeet) {
  return squareFeet / 43560;
}

function mowTime(width, length, squareMetresPerMinute) {
  const area = width * length;
  return area / squareMetresPerMinute;
}

function getAirQualityCategory(aqi) {
  if (aqi >= 0 && aqi <= 50) return "Good";
  if (aqi >= 51 && aqi <= 100) return "Moderate";
  if (aqi >= 101 && aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi >= 151 && aqi <= 200) return "Unhealthy";
  if (aqi >= 201 && aqi < 300) return "Very Unhealthy";
  if (aqi >= 300) return "Hazardous";
}

function yee_ha(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    return "Yee Ha";
  }
  if (num % 3 === 0) {
    return "Yee";
  }
  if (num % 7 === 0) {
    return "Ha";
  }
  return "Nada";
}

// Function to calculate the slope of a line given two points (x1,y1) and (x2,y2)
function slope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

export { hello, squareFeetToAcres, mowTime, getAirQualityCategory, yee_ha, slope };
