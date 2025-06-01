import styled from "styled-components";
import { EmptyStateProps } from "./emptyStateTypes";

const Container = styled.div`
  text-align: center;
  padding: 64px 16px;
  color: #6b7280;
`;

const IconWrapper = styled.div`
  margin-bottom: 24px;
  svg {
    width: 48px;
    height: 48px;
    stroke: #9ca3af;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin-bottom: 16px;
`;

export const EmptyState = ({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <Container>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {action}
    </Container>
  );
};
