import React, { useEffect, useState } from "react";
import { dti as dtiApi } from "../api/graphql";
import styled from "styled-components";

// example code by Mugs

// a simple query to the api asking for a list of examples

const Ul = styled.ul`
  padding: 0.5rem 4rem;
  margin-top: 0.5rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  li {
    margin: 2rem 0;
  }
`;

export default function ApiExample() {
  const [examples, setExamples] = useState([]);
  useEffect(() => {
    // Query to get a list of examples
    // No authentication is required
    const exampleQuery = {
      query: `
        {
            examples {
                _id
                name
            }
        }
        `,
    };

    // get all examples
    if (typeof window !== "undefined") {
      fetch(dtiApi.baseUrl, {
        method: "POST",
        headers: dtiApi.headers,
        body: JSON.stringify(exampleQuery),
      })
        .then(res => res.json())
        .then(({ data }) => {
          return setExamples(data.examples || []);
        })
        .catch(console.error);
    }
  }, []);

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
