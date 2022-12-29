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

export const H3 = styled.h3`
  font-weight: 300;
  font-size: 3.2rem;
  line-height: 4.8rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const H6 = styled.h4`
  font-weight: 300;
  font-size: 2rem;
  line-height: 30px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const P1 = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const P2 = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 36px;
  color: ${(props) => props.theme.colors.tertiary_200};
`;

export const PrimaryTimeDurationTag = styled.div`
  width: auto;
  min-width: 100px;
  min-height: 40px;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary};
  display: inline;
  // text styles
  font-style: italic;
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.secondary};
`;
export const SecondaryTimeDurationTag = styled.div`
  width: auto;
  min-width: 88px;
  min-height: 40px;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: inline;
  // text styles
  font-style: italic;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.tertiary_100};
`;
