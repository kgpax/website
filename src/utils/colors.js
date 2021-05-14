const pairs = [
  ['#D7F2BA', '#BDE4A8'],
  ['#FFF200', '#FFD300'],
  ['#97D2FB', '#83BCFF'],
  ['#FFBE85', '#FF9B42'],
];

export const pickColorPair = () =>
  pairs[Math.floor(Math.random() * pairs.length)];
