import { useState } from "react";
import { Form } from "../../templates/form";
import { PrimaryInput, PasswordInput } from "../../atoms/input";
import { BaseLabel } from "../../atoms/label";
import { PrimaryButton } from "../../atoms/button";
import styled from "styled-components";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SettingsPage = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    // 추후 API 연동 시 여기에 작성
    console.log("설정 변경:", form);
  };

  return (
    <Form title="설정" onSubmit={handleSubmit}>
      <FieldWrapper>
        <BaseLabel htmlFor="username">이름</BaseLabel>
        <PrimaryInput
          id="username"
          value={form.username}
          onChange={handleChange("username")}
          placeholder="이름을 입력하세요"
        />
      </FieldWrapper>

      <FieldWrapper>
        <BaseLabel htmlFor="email">이메일</BaseLabel>
        <PrimaryInput
          id="email"
          value={form.email}
          onChange={handleChange("email")}
          placeholder="이메일을 입력하세요"
        />
      </FieldWrapper>

      <FieldWrapper>
        <BaseLabel htmlFor="password">비밀번호</BaseLabel>
        <PasswordInput
          id="password"
          value={form.password}
          onChange={handleChange("password")}
          placeholder="새 비밀번호를 입력하세요"
        />
      </FieldWrapper>

      <PrimaryButton type="submit">저장</PrimaryButton>
    </Form>
  );
};

export default SettingsPage;
