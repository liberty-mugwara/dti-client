import styled from 'styled-components';
import { getColor } from '../../helpers';
import PropTypes from 'prop-types';
import { colors } from '../../config';

const HeadingPrimary = styled.h1`
  margin: ${props =>
    (props.marginTop || 0) +
    ' ' +
    (props.marginRight || 0) +
    ' ' +
    (props.marginBottom || 0) +
    ' ' +
    (props.marginLeft || 0)};
  font-weight: 700;
  font-size: calc(6rem + 1vw);
  padding: 0;
  color: ${({ color = '' }) => getColor(color)};
  text-align: center;
  backface-visibility: hidden;

  @media (max-width: 400px) {
    font-size: calc(3.5rem + 1vw);
  }
`;
HeadingPrimary.propTypes = {
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  animation: PropTypes.string,
};
export default HeadingPrimary;
