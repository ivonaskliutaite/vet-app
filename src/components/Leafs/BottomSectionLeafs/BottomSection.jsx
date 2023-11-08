import React from "react";
import styled from "styled-components";

const StyledBottomComponent = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  gap: 8%;
  flex-direction: row;
`;

export default function BottomComponent({ children }) {
  return <StyledBottomComponent>{children}</StyledBottomComponent>;
}
