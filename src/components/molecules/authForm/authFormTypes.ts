export interface AuthField {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export interface AuthFormProps {
  fields: AuthField[];
  buttonText: string;
}
