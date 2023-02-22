export const searchElem = (arr: string[], secondArr: string[]) => {
  for (const i of arr) {
    if (secondArr.includes(i)) return true;
  }
  return false;
};
