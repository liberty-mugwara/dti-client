import styled from "styled-components";

/** Requires 3 direct children
 * 1. header element
 * 2. main element
 * 3. footer element
 */
export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header"
    "main"
    "footer";

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;
