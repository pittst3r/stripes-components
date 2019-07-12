export default function parseCSSUnit(str) {
  const testString = str.toLowerCase();
  if (/%$/.test(testString)) return 'percent';
  if (/px$/.test(testString)) return 'px';
  if (/rem$/.test(testString)) return 'rem';
  if (/em$/.test(testString)) return 'em';
  if (/vw$/.test(testString)) return 'vw';
  // if nothing else, return percent..
  return 'percent';
}