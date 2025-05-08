import styled from "styled-components";
import { InputProps } from "./inputTypes";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordWrapper = styled.div`
  position: relative;
`;

const StyledPasswordInput = styled.input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const PasswordInput = ({ value, onChange, placeholder }: InputProps) => {
  const [show, setShow] = useState(false);

  return (
    <PasswordWrapper>
      <StyledPasswordInput
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ToggleButton type="button" onClick={() => setShow((prev) => !prev)}>
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </ToggleButton>
    </PasswordWrapper>
  );
};
