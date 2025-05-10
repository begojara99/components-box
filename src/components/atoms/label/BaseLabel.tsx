import styled from "styled-components";

interface BaseLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

export const BaseLabel = ({ htmlFor, children }: BaseLabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
