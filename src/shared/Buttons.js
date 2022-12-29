import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  width: auto;
  min-width: 204px;
  padding: 4px 30px;
  // text styling
  font-weight: 500;
  font-size: 29px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.secondary};
  transition: all ease 0.4s;
  :disabled {
    background-color: ${(props) => props.theme.colors.primary_disabled};
  }
  :active {
    transform: scale(0.7);
    opacity: 0.2;
  }
`;

export const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} className="space-x-4">
      {" "}
      {children}{" "}
    </StyledButton>
  );
};
