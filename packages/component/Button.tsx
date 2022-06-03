import styled, { ThemeProvider } from "styled-components";
import React from "react";

console.log("update component")

const StyledButton = styled.button`
  border: 2px solid;
  color: ${(props) => {
    console.log("styledButton", props);
    return props.theme.button.color;
  }};
`;

function Button(props) {
  console.log("rendering Button", props);
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;

export { styled, ThemeProvider };
