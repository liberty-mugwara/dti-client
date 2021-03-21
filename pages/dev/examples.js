import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { dti } from "../../api/graphql";
import styled from "styled-components";

// example code by Mugs

// a simple query to the api asking for a list of examples

export async function getStaticProps() {
  const { data } = await dti.client.query({
    query: gql`
      query GetExamples {
        examples {
          _id
          name
        }
      }
    `,
  });

  return {
    props: {
      examples: data.examples || [],
    },
    revalidate: 1,
  };
}

const Ul = styled.ul`
  padding: 0.5rem 4rem;
  margin-top: 0.5rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  li {
    margin: 2rem 0;
  }
`;

export default function Examples({ examples }) {
  console.log(examples);
  return (
    // display a list of examples
    <Ul>
      <h1>Example List</h1>
      {examples.map(example => (
        <Ul key={example._id}>
          <li>
            <em>Name:</em> {example.name}
          </li>
          <li>
            <em>Id:</em> {example._id}
          </li>
        </Ul>
      ))}
    </Ul>
  );
}
