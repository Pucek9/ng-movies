export function generateArrayOfNumbers(n): number[] {
  return Array.from(new Array(n), (val, index) => index + 1);
}
