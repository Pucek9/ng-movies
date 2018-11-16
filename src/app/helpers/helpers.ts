export function generateArrayOfNumbers(n): number[] {
  console.log(n)
  return Array.from(new Array(n), (val, index) => index + 1);
}
