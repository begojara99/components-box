import styled from "styled-components";
import { FormRowProps } from "./formRowTypes";
import { BaseLabel } from "../../atoms/label";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

export const FormRow = ({ label, htmlFor, children }: FormRowProps) => {
  return (
    <Container>
      <BaseLabel htmlFor={htmlFor}>{label}</BaseLabel>
      {children}
    </Container>
  );
};
