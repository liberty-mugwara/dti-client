import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, sizes } from '../../config';
import { rgba, getColor } from '../../helpers';

// utils

const Button = styled.button`
  padding: ${({ paddingY, paddingX }) =>
    (paddingY || sizes.sm) + ' ' + (paddingX || sizes.lg)};
  margin: ${props =>
    (props.marginTop || 0) +
    ' ' +
    (props.marginRight || 0) +
    ' ' +
    (props.marginBottom || 0) +
    ' ' +
    (props.marginLeft || 0)};
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.6rem;
  border-width: 0;
  border-radius: ${props =>
    props.rounded ? sizes.sm : props.round ? sizes.lg : 0};

  background-color: ${({ bg = 'primary' }) => getColor(bg)};
  color: ${({ color = 'white' }) => getColor(color)};
  transition: all 0.2s;
  outline: none;
  backface-visibility: hidden;
  &:active {
    background-color: ${({ bg = 'primary' }) => rgba(getColor(bg), 0.85)};
  }

  &:hover {
    ${({ hoverTranslate }) =>
      hoverTranslate ? 'transform: translateY(-3px);' : ''}
    ${({ hoverShadow }) =>
      hoverShadow ? `box-shadow: 0 1rem 2rem ${rgba(colors.black, 0.25)};` : ''}
  }

  ${({ hoverPrimary, hoverPrimaryBg, rounded, round }) =>
    hoverPrimary
      ? `
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    border-radius: ${rounded ? sizes.sm : round ? sizes.lg : 0};
    z-index: -1;
    top: 0;
    left: 0;
    background-color: ${getColor(hoverPrimaryBg || 'secondary')};
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    transform-origin: ${rounded || round ? 'center' : 'right'};
    transform: scaleX(0);
  }
  
  &:active::after {
    background-color: ${rgba(getColor(hoverPrimaryBg || 'secondary'), 0.85)};
  }
  
  &:hover::after {
    transform-origin: ${rounded || round ? 'center' : 'left'};
    transform: scaleX(1);
  }
  `
      : ''}

  ${({ animation }) =>
    animation === 'fadeInBottom'
      ? 'animation: fadeInBottom 1s ease-out .75s; animation-fill-mode: backwards;'
      : ''}
`;

Button.propTypes = {
  hoverPrimaryBg: PropTypes.string,
  hoverPrimary: PropTypes.bool,
  hoverTranslate: PropTypes.bool,
  hoverShadow: PropTypes.bool,
  color: PropTypes.string,
  bg: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  animation: PropTypes.string,
};

export default Button;
