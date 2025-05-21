import { AuthForm } from "../components/molecules/authForm";

export default function LoginPage() {
  return (
    <main style={{ maxWidth: 400, margin: "0 auto", padding: "2rem" }}>
      <h1>로그인</h1>
      <AuthForm />
    </main>
  );
}
