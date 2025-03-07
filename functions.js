function hello(){
  return "hello";
}

function calculateCoinTotal(nickels, dimes, quarters, loonies, toonies) {
return (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25) + (loonies * 1.00) + (toonies * 2.00);
}

function fahrenheitToCelsius(tempF) {
return (tempF - 32) * 5/9;
}

function cubeVolume(height) {
return Math.pow(height, 3);
}

function gymMembershipCost(cost, friends) {
let discount = 0;
if (friends === 1) {
  discount = 0.05;
} else if (friends === 2) {
  discount = 0.10;
} else if (friends >= 3) {
  discount = 0.15;
}
return cost * (1 - discount);
}

function earthquakeDamage(intensity) {
if (intensity < 5) {
  return "Very little or no damage at all";
} else if (intensity < 5.5) {
  return "There may be some damage";
} else if (intensity < 6.5) {
  return "There is serious damage: walls may crack, break or fall";
} else if (intensity < 7.5) {
  return "Disaster and buildings may collapse";
} else {
  return "Catastrophe and most buildings destroyed";
}
}

export { hello, calculateCoinTotal, fahrenheitToCelsius, cubeVolume, gymMembershipCost, earthquakeDamage };
