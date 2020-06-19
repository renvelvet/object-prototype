Number.prototype.powerFive = function () {
  let base = this;
  let result = Math.pow(base, 5);
  return result;
};

let num = 2;
console.log(num.powerFive());

// console.log(Number.protoype);
