export function capitalize(string: string): string {
  const firstLetter = string.substring(0, 1).toUpperCase();
  const everythingElse = string.substring(1).toLowerCase();
  return firstLetter.toString() + everythingElse.toString();
}

export function reverseString(string: string) {
  const arr: string[] = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.substring(i, i + 1));
  }
  let newString: string = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newString = newString.toString() + arr[i];
  }
  return newString;
}

export class Calculator {
  constructor() {}

  add(num1: number, num2: number): number {
    return num1 + num2;
  }
  substract(num1: number, num2: number): number {
    return num1 - num2;
  }
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
}

export function caesarCipher(string: string, shift: number): string {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const currentChar: string = string.substring(i, i + 1);
    const charCode: number = currentChar.charCodeAt(0);
    let newCode: number = charCode;
    shift = shift % 26;
    if (charCode >= 65 && charCode <= 90) {
      newCode = ((charCode + shift - 65) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      newCode = ((charCode + shift - 97) % 26) + 97;
    }
    const newChar: string = String.fromCharCode(newCode);
    newString = newString + newChar;
  }
  return newString;
}

type arrayStats = {
  average: number;
  min: number;
  max: number;
  length: number;
};

export function analyzeArray(arr: number[]): arrayStats {
  if (arr.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: arr.length
    };
  }
  let min: number = arr[0];
  let averageSum: number = arr[0];
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    averageSum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const average = averageSum / arr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: arr.length
  };
}

export const calculator = new Calculator();
