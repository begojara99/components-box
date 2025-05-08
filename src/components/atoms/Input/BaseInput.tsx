import styled from "styled-components";
import { InputProps } from "./inputTypes";

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
`;

export const BaseInput = (props: InputProps) => <StyledInput {...props} />;
