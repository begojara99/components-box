import { PrimaryInput, PasswordInput } from "../components/atoms/input";
import { useState } from "react";

export default function InputSection() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <PrimaryInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디"
      />
      <PasswordInput
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="비밀번호"
      />
    </div>
  );
}
