import { useState } from "react";
import { LabeledInput } from "../components/molecules/labeledInput";

export default function LabeledInputForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <LabeledInput
        id="email"
        label="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@example.com"
      />
    </form>
  );
}
