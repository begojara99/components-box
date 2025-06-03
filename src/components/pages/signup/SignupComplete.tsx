import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../atoms/button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 24px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6b7280;
`;

const SignupCompletePage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Title>회원가입이 완료되었습니다!</Title>
      <Description>이제 로그인하여 다양한 서비스를 이용해보세요.</Description>
      <PrimaryButton onClick={goToLogin}>로그인 하러 가기</PrimaryButton>
    </Container>
  );
};

export default SignupCompletePage;
