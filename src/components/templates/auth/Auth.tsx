import styled from "styled-components";
import { AuthProps } from "./authTypes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const Box = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Auth = ({ children }: AuthProps) => {
  return (
    <Wrapper>
      <Box>
        {/* 향후 로고 컴포넌트 추가 가능 */}
        {children}
      </Box>
    </Wrapper>
  );
};
