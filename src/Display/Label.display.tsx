import { BaseLabel, ErrorLabel } from "../components/atoms/label";

export default function LabelSection() {
  return (
    <div>
      <BaseLabel htmlFor="email">이메일</BaseLabel>
      <ErrorLabel>이메일을 입력해주세요.</ErrorLabel>
    </div>
  );
}
