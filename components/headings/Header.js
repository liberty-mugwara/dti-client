import styled from 'styled-components';
import { getColor } from '../../helpers';
import { colors } from '../../config';

const HeadingHeader = styled.h1`
  font-weight: 700;
  font-size: 15rem;
  padding: 0;
  color: ${({ color = '' }) => getColor(color)};
  text-align: center;
  letter-spacing: 5.5rem;
  text-transform: uppercase;
  backface-visibility: hidden;

  span {
    display: block;
    &.lg-screen {
      display: block;
    }

    &.main {
      padding-left: 5.5rem;
      animation: fadeInLeftExtra 1s ease-out;
      font-family: 'Oswald', sans-serif;
    }

    &.sub {
      color: ${colors.white};
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 0.4rem;
      padding-left: 0.8rem;
      animation: fadeInRightExtra 1s ease-out;
    }
  }

  @media (min-width: 800px) {
    text-transform: uppercase;
    line-height: 1;
    span.sm-screen {
      display: none;
    }
    span.lg-screen {
      display: block;
    }
    font-size: 25rem;
    letter-spacing: 5.5rem;
    text-align: left;
    span {
      &.main {
        padding: 0;
      }

      &.sub {
        padding: 0;
        font-size: 2.75rem;
        font-weight: 700;
        letter-spacing: 0;
        padding-left: 1rem;
      }
    }
  }

  @media (max-width: 439px) {
    font-size: 10rem;
    letter-spacing: 5.5rem;
    span {
      &.main {
        padding-left: 5.5rem;
      }

      &.sub {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.4rem;
        padding-left: 0.8rem;
      }
    }
  }

  @media (max-width: 352px) {
    font-size: 7rem;
    letter-spacing: 5.5rem;
    span {
      &.main {
        padding-left: 5.5rem;
      }

      &.sub {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.4rem;
        padding-left: 0.8rem;
      }
    }
  }
`;

export default HeadingHeader;
