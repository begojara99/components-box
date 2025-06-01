import styled from "styled-components";
import { FormTemplateProps } from "./formTypes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 32px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Form = ({ title, subtitle, children }: FormTemplateProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Content>{children}</Content>
    </Wrapper>
  );
};
