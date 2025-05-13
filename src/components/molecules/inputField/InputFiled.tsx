import { BaseLabel, ErrorLabel } from "../../atoms/label";
import { PrimaryInput } from "../../atoms/input";
import styled from "styled-components";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
}: InputFieldProps) => {
  return (
    <Wrapper>
      <BaseLabel htmlFor={id}>{label}</BaseLabel>
      <PrimaryInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Wrapper>
  );
};
