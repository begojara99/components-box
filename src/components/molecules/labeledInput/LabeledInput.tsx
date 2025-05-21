import styled from "styled-components";
import { BaseLabel } from "../../atoms/label";
import { PrimaryInput } from "../../atoms/input";
import { InputProps } from "../../atoms/input/inputTypes";

interface LabeledInputProps extends InputProps {
  label: string;
  id: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabeledInput = ({
  label,
  id,
  ...inputProps
}: LabeledInputProps) => {
  return (
    <Container>
      <BaseLabel htmlFor={id}>{label}</BaseLabel>
      <PrimaryInput id={id} {...inputProps} />
    </Container>
  );
};
