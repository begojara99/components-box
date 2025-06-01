import { useState } from "react";
import { FormTemplate } from "@/components/templates/formTemplate/FormTemplate";
import { AuthForm } from "../../molecules/authForm";
import { LoginFormState } from "./loginTypes";

const LoginPage = () => {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof LoginFormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    // 로그인 요청 처리 (후속 단계에서 구현)
    console.log("로그인 시도", form);
  };

  return (
    <FormTemplate title="로그인" onSubmit={handleSubmit}>
      <AuthForm
        fields={[
          {
            id: "email",
            label: "이메일",
            placeholder: "이메일을 입력하세요",
            value: form.email,
            onChange: handleChange("email"),
          },
          {
            id: "password",
            label: "비밀번호",
            placeholder: "비밀번호를 입력하세요",
            value: form.password,
            onChange: handleChange("password"),
            type: "password",
          },
        ]}
        buttonText="로그인"
      />
    </FormTemplate>
  );
};

export default LoginPage;
