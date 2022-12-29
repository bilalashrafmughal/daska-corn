import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchIcon } from "./SvgIcons";

export default function SearchBar({ search = "", setSearch }) {
  const [value, setValue] = useState(search);

  useEffect(() => {
    setValue(search);
  }, [search]);

  const handleSearch = () => {
    setSearch(value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(value);
    }
  };

  return (
    <StyledSearchBar className="w-full flex items-center h-20 px-12 rounded-full">
      <input
        className="bg-transparent h-full flex-1"
        type="text"
        placeholder="Search your favorite videos..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEnter}
      />
      <SearchIcon onClick={handleSearch} />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  background-color: ${(props) => props.theme.colors.secondary_100};
  input {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.colors.tertiary_100};
  }
  input:focus-visible {
    outline: none;
    border: none;
  }
`;
