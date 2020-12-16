function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}

function subtract(a, b) {
  console.log(`Subtracting ${b} from ${a}`);
  return a - b;
}

// Write this function to achieve the result below
function calculateOnce(fn) {}

const addOnce = calculateOnce(add);
const subtractOnce = calculateOnce(subtract);

console.log(addOnce(10, 5));
// Adding 10 and 5
// 15

console.log(addOnce(20, 10));
// Adding 20 and 10
// 30

console.log(addOnce(10, 5));
// 15

console.log(subtractOnce(10, 5));
// Subtracting 5 from 10
// 5

console.log(subtractOnce(20, 10));
// Subtracting 10 from 20
// 10

console.log(subtractOnce(10, 5));
// 5
