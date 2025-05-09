import {
  PrimaryButton,
  SecondaryButton,
  IconButton,
} from "../components/atoms/button";
import { VariantButton } from "../components/atoms/button/VariantButton";
import { Search } from "lucide-react";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export default function ButtonSection() {
  return (
    <div>
      <ButtonGroup>
        <PrimaryButton onClick={() => alert("로그인")}>로그인</PrimaryButton>
        <SecondaryButton onClick={() => alert("회원가입")}>
          회원가입
        </SecondaryButton>
        <IconButton>
          <Search size={16} />
        </IconButton>
      </ButtonGroup>

      <ButtonGroup>
        <VariantButton variant="primary" onClick={() => alert("로그인")}>
          로그인
        </VariantButton>

        <VariantButton variant="secondary" onClick={() => alert("회원가입")}>
          회원가입
        </VariantButton>

        <VariantButton variant="icon">
          <Search size={16} />
        </VariantButton>
      </ButtonGroup>
    </div>
  );
}
