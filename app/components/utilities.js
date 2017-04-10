function randomBetween(min, max) {
  return (Math.random() * (max - min) + min);
};

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export { randomBetween, randomFrom };
