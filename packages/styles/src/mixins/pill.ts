export const getPillBorderRadius = (pill: boolean, borderRadius: number | string): string | number => {
  return pill ? '3rem' : borderRadius;
};
