import Head from 'next/head';
import Header from '../layouts/Header';
import PrimaryHeading from '../components/headings/Primary';
import Button from '../components/Buttons/Button';
import styled from 'styled-components';
import { rgba } from '../helpers';
import { colors } from '../config';
import NavBar from '../components/nav/PublicNavBar';
const About = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 1rem 2rem;
  text-align: center;
  p {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    color: #333;
  }
  div.btn-group {
    display: inline-block;

    * {
      margin: 3rem 1rem;
    }
  }
`;

const Features = styled.section`
  margin-top: 8rem;
  width: 100%;
  padding: 8rem 4rem;
  background: linear-gradient(
      to bottom right,
      ${rgba(colors.secondary, 0.75)},
      ${rgba(colors.primary, 0.75)}
    ),
    url('landing.jpg');
  background-position: fixed;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Feature = styled.div`
  width: 24rem;
  padding: 1rem 2rem;
  background-color: ${rgba('#fff', 0.8)};
  border-radius: 0.3rem;
  margin: 1rem 2rem;

  .heading {
    font-size: 1.8rem;
    color: #666;
    text-align: center;
    text-transform: uppercase;
    margin: 1rem 0;
  }
  .body {
    text-align: center;
    font-size: 1.4rem;
    color: #888;
  }
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DTI | Online</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>
        <About>
          <PrimaryHeading marginTop="2rem" color="secondary">
            DTI Online
          </PrimaryHeading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            consequuntur quam ipsum quasi nihil placeat illo illum, nesciunt
            ullam provident cumque autem debitis nam architecto consectetur a
            animi aut at!
          </p>
          <div className="btn-group">
            <Button
              bg="secondary"
              hoverTranslate
              hoverPrimary
              hoverPrimaryBg="primary"
              hoverShadow
              round
            >
              Sign In
            </Button>
            <Button
              bg="secondary"
              hoverTranslate
              hoverPrimary
              hoverPrimaryBg="primary"
              hoverShadow
              round
            >
              Sign Up
            </Button>
          </div>
        </About>
        <Features>
          <Feature>
            <h2 className="heading">Digital Logbook</h2>
            <p className="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              consequuntur quam ipsum quasi nihil placeat illo illum.
            </p>
          </Feature>
          <Feature>
            <h2 className="heading">Digital Lecture rooms</h2>
            <p className="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              consequuntur quam ipsum quasi nihil placeat illo illum.
            </p>
          </Feature>

          <Feature>
            <h2 className="heading">chat with other students</h2>
            <p className="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              consequuntur quam ipsum quasi nihil placeat illo illum.
            </p>
          </Feature>

          <Feature>
            <h2 className="heading">keep informed</h2>
            <p className="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              consequuntur quam ipsum quasi nihil placeat illo illum.
            </p>
          </Feature>
        </Features>
      </main>

      <footer></footer>
    </div>
  );
}
