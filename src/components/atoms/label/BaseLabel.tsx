import styled from "styled-components";
import { LabelProps } from "./labelTypes";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

export const BaseLabel = ({ htmlFor, children }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
