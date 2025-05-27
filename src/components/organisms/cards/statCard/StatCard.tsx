// components/organisms/statCard/StatCard.tsx
import styled from "styled-components";
import { ReactNode } from "react";
import { IconWrapper } from "../../../atoms/icon/IconWrapper";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
`;

export const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <CardContainer>
      <InfoWrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </InfoWrapper>
      {icon && <IconWrapper size={24}>{icon}</IconWrapper>}
    </CardContainer>
  );
};
