import React from "react";
import styled from "styled-components";

const StyledFragment = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export default function FragmentComponent({ children }) {
  return <StyledFragment>{children}</StyledFragment>;
}
