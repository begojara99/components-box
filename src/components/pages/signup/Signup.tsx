import { useState } from "react";
import { Form } from "../../templates/form";
import { AuthForm } from "../../molecules/authForm";
import { SignupFormState } from "./signupTypes";

const SignupPage = () => {
  const [form, setForm] = useState<SignupFormState>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (field: keyof SignupFormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    if (!form.email || !form.password || !form.confirmPassword) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 시도", form);
  };

  return (
    <Form title="회원가입" onSubmit={handleSubmit}>
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
          {
            id: "confirmPassword",
            label: "비밀번호 확인",
            placeholder: "비밀번호를 한 번 더 입력하세요",
            value: form.confirmPassword,
            onChange: handleChange("confirmPassword"),
            type: "password",
          },
        ]}
        buttonText="회원가입"
      />
    </Form>
  );
};

export default SignupPage;
