import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Paper } from "shared/Layout";
import SearchBar from "shared/SearchBar";
import { resetQuery, search } from "store/querySlice";
import styled from "styled-components";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchBar = useSelector((state) => state.query.searchBar);

  const setSearch = (value) => {
    dispatch(search(value));
  };

  const handleReset = () => {
    dispatch(resetQuery());
    navigate("/");
  };

  return (
    <Paper>
      <Container>
        <div className="flex items-center space-x-16 py-6">
          <StyledLogo
            src="/assets/logo.png"
            alt="nav-logo"
            className="w-24"
            onClick={handleReset}
          />
          <SearchBar search={searchBar} setSearch={setSearch} />
        </div>
      </Container>
    </Paper>
  );
}

const StyledLogo = styled.img`
  transition: ease all 0.6s;
  cursor: pointer;
  :hover {
    transform: rotate(90deg);
  }
`;
