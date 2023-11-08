import React from "react";
import styled from "styled-components";

const StyledTopComponent = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  gap: 8%;
  flex-direction: row;
`;

export default function TopComponent({ children }) {
  return <StyledTopComponent>{children}</StyledTopComponent>;
}
