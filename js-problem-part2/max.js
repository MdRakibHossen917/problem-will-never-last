//Hight Number 
const disha = 56;
const salman = 95;

if (disha > salman) {
  console.log("Disha will get the strawberry");
} else {
  console.log("Salman will eat the strawberry");
}


// inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(56,95);
const max1 = getMax(96,95);
const ultimateMax = (max,max1);
console.log('max number:',max);
console.log('max number:',max1);
console.log('ultimateMax number:',ultimateMax);
