import { toColumnLetter, toColumnNumber } from '../src';

const letterNumberSets: [string, number][] = [
  ['A', 0],
  ['B', 1],
  ['C', 2],
  ['Y', 24],
  ['Z', 25],
  ['AA', 26],
  ['AB', 27],
  ['AC', 28],
  ['AZ', 51],
  ['BA', 52],
  ['BB', 53],
  ['AAA', 702],
  ['AAB', 703],
  ['AAC', 704],
  ['ABC', 730],
  ['ABD', 731],
  ['CHI', 2244],
  ['ZZZ', 18277],
  ['ABCD', 19009],
  ['MEME', 232210],
  ['TYPE', 368840],
  ['ABCDEFG', 334123302],
];

const numberLetterSets = letterNumberSets.map<[number, string]>(pair => [
  pair[1],
  pair[0],
]);

describe('toColumnLetter', () => {
  it.each<any>([undefined, '1', null, /[a-z]/])(
    'should throw if number is not Number `%s`',
    value => {
      expect(() => toColumnLetter(value)).toThrowError(
        'number must be a Number!'
      );
    }
  );

  it('should throw if number is negative', () => {
    expect(() => toColumnLetter(-1)).toThrowError(
      'number must be greater than or equal to 0!'
    );
  });

  it('should throw if number is not an integer', () => {
    expect(() => toColumnLetter(1.1)).toThrowError('number must be an integer');
  });

  it.each(letterNumberSets)(
    "should return '%s' when number = %d",
    (expected, number) => {
      expect(toColumnLetter(number)).toEqual(expected);
    }
  );
});

describe('toColumnNumber', () => {
  it.each<any>([undefined, 1, null, /[a-z]/])(
    'should throw if letters is not String `%s`',
    value => {
      expect(() => toColumnNumber(value)).toThrowError(
        'letters must be a String!'
      );
    }
  );

  it('should throw if letters is an empty string', () => {
    expect(() => toColumnNumber('')).toThrowError(
      'letters must not be an empty string!'
    );
  });

  it('should throw if letters contains non [a-zA-Z] characters', () => {
    expect(() => toColumnNumber('abc1ABC')).toThrowError(
      'letters must only contain [a-zA-Z] characters!'
    );
  });

  it('should be case insensitive', () => {
    expect(toColumnNumber('a')).toEqual(0);
  });

  it.each(numberLetterSets)(
    "should return %d when letters = '%s'",
    (expected, letters) => {
      expect(toColumnNumber(letters)).toEqual(expected);
    }
  );
});
