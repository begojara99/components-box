import styled from "styled-components";
import { BaseLabel } from "../../atoms/label";
import { PrimaryInput, PasswordInput } from "../../atoms/input";
import { PrimaryButton } from "../../atoms/button";
import { AuthFormProps } from "./authFormTypes";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AuthForm = ({ fields, buttonText }: AuthFormProps) => {
  return (
    <FormWrapper>
      {fields.map((field) => (
        <div key={field.id}>
          <BaseLabel htmlFor={field.id}>{field.label}</BaseLabel>
          {field.type === "password" ? (
            <PasswordInput
              id={field.id}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
            />
          ) : (
            <PrimaryInput
              id={field.id}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <PrimaryButton type="submit">{buttonText}</PrimaryButton>
    </FormWrapper>
  );
};
