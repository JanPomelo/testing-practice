export function capitalize(string: string): string {
  const firstLetter = string.substring(0, 1).toUpperCase();
  const everythingElse = string.substring(1).toLowerCase();
  return firstLetter.toString() + everythingElse.toString();
}

export function reverseString(string: string) {
  const arr: string[] = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.substring(i,i+1));
  }
  let newString: string = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    newString = newString.toString() + arr[i];
  }
  return newString;
}