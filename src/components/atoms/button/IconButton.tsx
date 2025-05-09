import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const IconButton = ({ children, ...props }: IconButtonProps) => (
  <StyledIconButton {...props}>{children}</StyledIconButton>
);
