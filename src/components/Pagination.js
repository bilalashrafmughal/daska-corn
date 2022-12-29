import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export default function MyPagination(props) {
  return <StyledPagination size="large" count={10} {...props} />;
}

const StyledPagination = styled(Pagination)`
  .MuiButtonBase-root {
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 4.2rem;
    color: ${(props) => props.theme.colors.tertiary};
  }
  .MuiPaginationItem-ellipsis {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
  }
  .MuiPaginationItem-previousNext {
    background-color: transparent;
    svg {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  .MuiButtonBase-root.Mui-selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;
