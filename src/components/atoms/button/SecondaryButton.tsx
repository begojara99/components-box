import styled from "styled-components";
import { ButtonProps } from "./buttonTypes";

const StyledSecondaryButton = styled.button`
  padding: 8px 16px;
  background-color: #f3f4f6; /* gray-100 */
  color: #374151; /* gray-700 */
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #e5e7eb;
  }
`;

export const SecondaryButton = ({ children, ...props }: ButtonProps) => (
  <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>
);
