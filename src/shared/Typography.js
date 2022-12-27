import styled from "styled-components";

export const BigHeading = styled.h1`
  font-weight: 700;
  font-size: 9.6rem;
  line-height: 14rem;
  color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
`;

export const H2 = styled.h2`
  font-weight: 300;
  font-size: 4.8rem;
  line-height: 7.2rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const H4 = styled.h4`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: ${(props) => props.theme.colors.secondary};
`;
