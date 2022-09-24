export const compareFlatArrays = (source: string[], target: string[]): string[] => {
  const comparedArray: string[] = [];
  if (source) {
    source.map((a) => {
      if (target.includes(a)) comparedArray.push(a);
    });
  }

  return comparedArray;
};
