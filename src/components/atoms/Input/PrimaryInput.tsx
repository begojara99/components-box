import styled from "styled-components";
import { InputProps } from "./inputTypes";

const StyledPrimaryInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  &:focus {
    border-color: #3b82f6;
  }
`;

export const PrimaryInput = (props: InputProps) => (
  <StyledPrimaryInput {...props} />
);
