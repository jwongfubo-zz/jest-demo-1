export function getSumOfOddNumbers(input) {
  return input
    .filter(number => number % 2 !== 0)
    .reduce((acc, value) => acc + value, 0);
}
