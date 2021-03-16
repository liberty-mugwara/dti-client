import React from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons/Button';
import HeadingHeader from '../components/headings/Header';
import PublicNavBar from '../components/nav/PublicNavBar';
import { colors, sizes } from '../config';
import { rgba } from '../helpers';

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  background: ${colors.secondary};
  background-position: fixed;
  background-size: cover;
  @media (max-width: 800px) {
    justify-content: center;
    height: 70vh;
  }
`;

const TextBox = styled.div`
  padding: ${sizes.sm};
  color: white;
  position: absolute;
  text-align: center;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 800px) {
    padding: 3rem;
    text-align: left;
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
    font-size: 1.7rem;
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

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 50%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <VideoContainer>
        <video autoPlay muted loop>
          <source src="img/gas-cutter.mp4" />
        </video>
      </VideoContainer>
      <PublicNavBar />
      <TextBox>
        <HeadingHeader>
          <span className="main">DTI</span>
          <span className="sub lg-screen">Delta Technical Institute</span>
        </HeadingHeader>
        <Button
          marginLeft="1rem"
          marginTop="2rem"
          animation="fadeInBottom"
          hoverPrimary
        >
          Get Started
        </Button>
      </TextBox>
    </StyledHeader>
  );
}
