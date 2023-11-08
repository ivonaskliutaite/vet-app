import React from "react";
import styled from "styled-components";

const StyledBottomUpLeaf = styled.div`
  background-color: #595c3a;
  text-align: center;
  width: 500px;
  height: 40vh;
  margin: 32px 0;
  border-radius: 138px 9px 200px 9px;
  float: left;

  &:hover {
    background-color: #353900;
    cursor: pointer;
    transition: ease-out 0.4s;
  }
`;

const StyledText = styled.p`
  padding-top: 16vh;
  letter-spacing: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 24px;
`;

export default function LeftBottomLeaf({ children }) {
  return (
    <StyledBottomUpLeaf>
      <StyledText>{children}</StyledText>
    </StyledBottomUpLeaf>
  );
}
