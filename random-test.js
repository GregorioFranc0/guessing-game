function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};
console.log(randomInRange(10, 100));
// Expected output: 0, 1 or 2

console.log(randomInRange(100000, 1000000));
// Expected output: 0

console.log(randomInRange(5, 10));
  // Expected output: a number from 0 to <1
