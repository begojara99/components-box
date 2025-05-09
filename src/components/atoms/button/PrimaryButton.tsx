import styled from "styled-components";
import { ButtonProps } from "./buttonTypes";

const StyledPrimaryButton = styled.button`
  padding: 8px 16px;
  background-color: #2563eb; /* blue-600 */
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = ({ children, ...props }: ButtonProps) => (
  <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>
);
