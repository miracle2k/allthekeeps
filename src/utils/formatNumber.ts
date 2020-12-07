const percentFormatter = new Intl.NumberFormat("en-US", {
  style: 'percent',
  maximumFractionDigits: 2
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function formatNumber(value: number|string) {
  return numberFormatter.format(typeof value === 'string' ? parseFloat(value): value);
}

export function formatPercentage(value: number|string) {
  return percentFormatter.format(typeof value === 'string' ? parseFloat(value): value);
}