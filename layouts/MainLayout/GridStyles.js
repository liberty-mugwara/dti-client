import styled from "styled-components";

/** Requires 4 direct children
 * 1. header element
 * 2. aside element
 * 3. main element
 * 4. footer element
 */
export default styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";

  header {
    grid-area: header;
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;
