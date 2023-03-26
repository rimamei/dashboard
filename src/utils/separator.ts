export const numberFormat = (value: number) => {
  const numberFormatter = Intl.NumberFormat('en-US');
  const formatted = numberFormatter.format(value);

  return formatted;
};
