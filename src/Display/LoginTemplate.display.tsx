import { useState } from "react";
import { Auth } from "../components/templates/auth";
import { AuthForm } from "../components/molecules/authForm";

export default function LoginTemplate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Auth>
      <AuthForm
        fields={[
          {
            id: "email",
            label: "이메일",
            placeholder: "이메일을 입력하세요",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          },
          {
            id: "password",
            label: "비밀번호",
            placeholder: "비밀번호를 입력하세요",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            type: "password",
          },
        ]}
        buttonText="로그인"
      />
    </Auth>
  );
}
