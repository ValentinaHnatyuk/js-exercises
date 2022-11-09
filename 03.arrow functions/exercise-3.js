
const sum = (a, b) => {
  return a + b;
}


const subtract = (a,b) => {
  return a - b;
}

const multiply = (a,b) => {
  return a * b;
}

const divide = (a,b) => {
  return a / b;
}

const log = function (value) {
  console.log(value);
}

let combine = ((sum(2,4)) * (sum(5,2))- 2) / 5

log(combine);