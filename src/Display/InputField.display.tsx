import { InputField } from "../components/molecules/inputField";
import { useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  return (
    <InputField
      id="user-id"
      label="아이디"
      placeholder="아이디를 입력하세요"
      value={id}
      onChange={(e) => {
        setId(e.target.value);
        setError(e.target.value ? "" : "아이디는 필수입니다");
      }}
      error={error}
    />
  );
}
