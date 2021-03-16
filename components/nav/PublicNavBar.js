import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import React, { useState } from 'react';
import { colors } from '../../config';
import { rgba } from '../../helpers';

const NavMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1020;
  transform-origin: left;
  background-color: #fff;
  transition: all 0.5s ease-out;

  transform: scaleX(
    ${({ state }) => ([('entering', 'entered')].includes(state) ? 1 : 0)}
  );

  .nav-header{
    width 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;

    a {
      position: relative;
      font-size: 1.7rem;
      cursor: pointer;
      margin: 0 2rem;
      font-weight: 600;
      line-height: 1;
      display: flex;
      align-items: center;
      &.brand {
        color: ${colors.primary};
        font-size: calc(2rem + 0.3vw);
        font-weight: 400;
        padding: 0;
        border: 2px solid ${colors.primary};
        border-left-width: 0;
        border-right-width: 0;
        &::after,
        &::before {
          background-color: #fff;
        }
        &:hover::before {
          transform: scaleX(0);
        }
      }
  }
`;

const NavBar = styled.nav`
  color: white;
  text-transform: uppercase;
  align-self: start;
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    position: relative;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    padding: 1rem 0;
    &.brand {
      color: ${colors.primary};
      font-size: calc(2rem + 0.3vw);
      font-weight: 400;
      padding: 0;
      border: 2px solid ${colors.primary};
      border-left-width: 0;
      border-right-width: 0;
      &::after,
      &::before {
        background-color: #fff;
      }
      &:hover::before {
        transform: scaleX(0);
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${colors.primary};
      transition: transform 0.4s;
      transform: scaleX(0);
    }
    &::before {
      transform-origin: left;
      top: 0;
      left: 0;
    }
    &::after {
      transform-origin: right;
      top: 100%;
      left: 0;
    }
    &:hover::after {
      transform-origin: left;
      transform: scaleX(1);
    }
    &:hover::before {
      transform-origin: right;
      transform: scaleX(1);
    }
  }

  @media (max-width: 735px) {
    div.links {
      display: none;
    }
    a.brand {
      margin-left: 0;
    }
  }
`;

const NavButton = styled.button`
  position: relative;
  background-color: transparent;
  margin: 0 2rem;
  padding: 1rem 2rem;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.6rem;
  border: 2px solid ${colors.primary};
  color: #fff;
  outline: none;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    transform-origin: right;
    transform: scaleX(0);
  }

  &:active::after {
    background-color: ${rgba(colors.primary, 0.75)};
  }

  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default function Nav() {
  const [animate, setAnimate] = useState(false);
  return (
    <NavBar>
      <a className="brand">Delta Beverages</a>
      <div className="links">
        <a>About</a>
        <a>Contact</a>
        <a>Register</a>
        <NavButton onClick={() => setAnimate(!animate)}>Login</NavButton>
      </div>
      <Transition in={animate} timeout={400}>
        {state => (
          <NavMobile state={state}>
            <div className="nav-header">
              <a className="brand">Delta Beverages</a>
              <NavButton onClick={() => setAnimate(!animate)}>X</NavButton>
            </div>
          </NavMobile>
        )}
      </Transition>
    </NavBar>
  );
}
