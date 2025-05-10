import styled from "styled-components";

interface ErrorLabelProps {
  children: React.ReactNode;
}

const StyledError = styled.span`
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
`;

export const ErrorLabel = ({ children }: ErrorLabelProps) => {
  return <StyledError>{children}</StyledError>;
};
