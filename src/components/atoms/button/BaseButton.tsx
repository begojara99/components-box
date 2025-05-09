import styled from "styled-components";
import { ButtonProps } from "./buttonTypes";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
`;

export const BaseButton = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);
