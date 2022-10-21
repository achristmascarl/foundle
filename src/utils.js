export function c(...classNames) {
  return classNames
    .filter(v => v)
    .join(' ')
    .trim()
    .replace(/\s{2,}/g, ' ');
}
