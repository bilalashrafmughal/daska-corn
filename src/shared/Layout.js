import styled from "styled-components";

export const Paper = styled.div`
  background-color: ${(props) =>
    props.light
      ? props.theme.colors.tertiary_100
      : props.theme.colors.tertiary};
`;

export const Container = styled.section`
  padding: 14px 56px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.tertiary_200};
`;
