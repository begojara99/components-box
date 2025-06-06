import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../../atoms/button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  color: #6b7280;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>404</Title>
      <Description>요청하신 페이지를 찾을 수 없습니다.</Description>
      <PrimaryButton onClick={handleGoHome}>홈으로 이동</PrimaryButton>
    </Wrapper>
  );
};

export default NotFoundPage;
