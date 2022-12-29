import React from "react";
import styled from "styled-components";

export default function Tab({ value, onClick }) {
  return (
    <StyledTab
      className="rounded-full mr-4 mb-4 inline px-6 py-5 cursor-pointer"
      onClick={onClick}
      key={`${Math.random()}`}
    >
      {value}
    </StyledTab>
  );
}

const StyledTab = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.tertiary_100};
  transition: all ease 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;
