import styled from "styled-components";
import { setPadding, setMargin } from "../../helpers";

export default styled.button`
  text-transform: uppercase;

  padding: ${({ padding }) => padding || "1rem 2rem"};
  ${({ paddingX }) => (paddingX ? setPadding("x", paddingX) : "")}
  ${({ paddingY }) => (paddingY ? setPadding("y", paddingY) : "")}
  ${({ margin }) => (margin ? `margin: ${margin};` : "")}
  ${({ marginX }) => (marginX ? setMargin("x", marginX) : "")}
  ${({ marginY }) => (marginY ? setMargin("y", marginY) : "")}
  ${({ marginT }) => (marginT ? `margin-top: ${marginT};` : "")}
  ${({ marginL }) => (marginL ? `margin-left: ${marginL};` : "")}
  ${({ marginR }) => (marginR ? `margin-right: ${marginR};` : "")}
  ${({ marginB }) => (marginB ? `margin-bottom: ${marginB};` : "")}
`;
