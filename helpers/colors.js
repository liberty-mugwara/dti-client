import { toBase10 } from './numbers';
import { removeSpaces } from './strings';
import { colors } from '../config';

export const getColor = (color = '') => {
  if (typeof color !== 'string') throw new Error('color must be a string');
  if (
    color.startsWith('#') ||
    color.startsWith('rgb(') ||
    color.startsWith('rgba(')
  )
    return color;
  return colors[color] || '#fff';
};

export const rgba = (color, opacity) => {
  //  remove all spaces
  const standardColor = removeSpaces(color);

  // assume color is in rgb format
  let rgbValues = standardColor.slice(4, standardColor.indexOf(')'));

  if (standardColor.startsWith('#')) {
    const values = standardColor.slice(1);

    if (values.length === 3) {
      rgbValues = [...values].map(hex => toBase10(hex + hex, 16)).join(',');
    } else if (values.length === 6) {
      const formattedValue = `${values.slice(0, 2)},${values.slice(
        2,
        4
      )},${values.slice(4, 6)}`;

      rgbValues = formattedValue
        .split(',')
        .map(hex => toBase10(hex, 16))
        .join(',');
    }
  }
  return `rgba(${rgbValues},${opacity})`;
};
