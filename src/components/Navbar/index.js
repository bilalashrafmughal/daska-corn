import React, { useState } from "react";
import { Container, Paper } from "shared/Layout";
import SearchBar from "shared/SearchBar";
import styled from "styled-components";

export default function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <Paper style={{ marginBottom: "1px" }}>
      <Container>
        <StyledNavbar className="flex items-center space-x-16 py-6">
          <img src="/assets/logo.png" alt="nav-logo" className="w-24" />
          <SearchBar search={search} setSearch={setSearch} />
        </StyledNavbar>
      </Container>
    </Paper>
  );
}

const StyledNavbar = styled.div``;
