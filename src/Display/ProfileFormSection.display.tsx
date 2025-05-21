import { FormRow } from "../components/molecules/formRow";
import { PrimaryInput } from "../components/atoms/input";
import { useState } from "react";

export default function ProfileFormSection() {
  const [name, setName] = useState("");

  return (
    <FormRow label="이름" htmlFor="name">
      <PrimaryInput
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
    </FormRow>
  );
}
