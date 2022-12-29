import React from "react";
import { Container } from "shared/Layout";
import { P2 } from "shared/Typography";
import styled from "styled-components";

export default function Loader() {
  return (
    <Container>
      <StyledLoader>
        <img src="/assets/logo.png" alt="loader" />
        <P2 className="mt-6"> Loading... </P2>
      </StyledLoader>
    </Container>
  );
}

const StyledLoader = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    animation: circle 2s linear infinite;
    width: 50px;
  }
  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
