import { useState } from "react";
import { PrimaryInput, PasswordInput } from "../../atoms/input";
import { BaseLabel } from "../../atoms/label";
import { PrimaryButton } from "../../atoms/button";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AuthForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = () => {
    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    alert(`로그인 시도\nID: ${id}, PW: ${pw}`);
  };

  return (
    <FormWrapper>
      <div>
        <BaseLabel htmlFor="userId">아이디</BaseLabel>
        <PrimaryInput
          id="userId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
      </div>

      <div>
        <BaseLabel htmlFor="password">비밀번호</BaseLabel>
        <PasswordInput
          id="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <PrimaryButton onClick={handleSubmit}>로그인</PrimaryButton>
    </FormWrapper>
  );
};
