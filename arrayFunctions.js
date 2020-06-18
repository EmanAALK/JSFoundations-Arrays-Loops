//______________________________________________________________________________________
function getOdds(numbers) {
  const Odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      Odd.push(numbers[i]);
    }
  }
  return Odd;
}
//_________________________________________________________________________________________
function getEvens(numbers) {
  const Even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      Even.push(numbers[i]);
    }
  }
  return Even;
}
//_________________________________________________________________________________________
function getDuplicateCount(x, numbers) {
  let r = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) r++;
  }
  return r;
}
//_________________________________________________________________________________________
function youGottaCalmDown(s) {
  while (s.endsWith("!!")) s = s.slice(0, -1);
  return s;
}

module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
