const ASCII_OFFSET = 65;

/**
 * toColumnLetter
 *
 * @summary converts 0-indexed number to excel style column letters
 *
 * @param {Number} number 0-indexed number to be converted into column letters
 *
 * @example
 *   toColumnLetter(0) // 'A'
 *   toColumnLetter(1) // 'B'
 *   toColumnLetter(26) // 'AA'
 *   toColumnLetter(18277) // 'ZZZ'
 *   toColumnLetter(19009) // 'ABCD'
 */
export const toColumnLetter = (number: number): string => {
  if (typeof number !== 'number') {
    throw new Error('number must be a Number!');
  }

  const divisionResult = Math.floor(number / 26);
  const moduloResult = number % 26;

  const nextLetter = String.fromCharCode(moduloResult + ASCII_OFFSET);

  if (divisionResult > 0) {
    return `${toColumnLetter(divisionResult - 1)}${nextLetter}`;
  }

  return nextLetter;
};

/**
 * toColumnNumber
 *
 * @summary converts excel style column letter to 0-indexed number
 *
 * @param {String} letters letters to be converted to 0-indexed column number
 *
 * @example
 *   toColumnNumber('A') // 0
 *   toColumnNumber('B') // 1
 *   toColumnNumber('AA') // 26
 *   toColumnNumber('ZZZ') // 18277
 *   toColumnNumber('ABCD') // 19009
 */
export const toColumnNumber = (letters: string): number => {
  if (typeof letters !== 'string') {
    throw new Error('letters must be a String!');
  }

  return (
    letters
      .split('')
      .reverse()
      .reduce(
        (total, letter, idx) =>
          total +
          Math.pow(26, idx) * (letter.charCodeAt(0) - (ASCII_OFFSET - 1)),
        0
      ) - 1
  );
};
