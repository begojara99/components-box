import styled from "styled-components";
import { LabelProps } from "./labelTypes";

const StyledError = styled.span`
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
`;

export const ErrorLabel = ({ children }: LabelProps) => {
  return <StyledError>{children}</StyledError>;
};
