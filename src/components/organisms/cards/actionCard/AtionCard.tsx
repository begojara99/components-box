import styled from "styled-components";
import { IconWrapper } from "../../../atoms/icon/IconWrapper";
import { Pencil, Trash2 } from "lucide-react";

interface ActionCardProps {
  title: string;
  description?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CardContainer = styled.div`
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const Description = styled.span`
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionCard = ({
  title,
  description,
  onEdit,
  onDelete,
}: ActionCardProps) => {
  return (
    <CardContainer>
      <TextContainer>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </TextContainer>
      <Actions>
        {onEdit && (
          <IconWrapper size={20} color="#3b82f6">
            <Pencil onClick={onEdit} style={{ cursor: "pointer" }} />
          </IconWrapper>
        )}
        {onDelete && (
          <IconWrapper size={20} color="#ef4444">
            <Trash2 onClick={onDelete} style={{ cursor: "pointer" }} />
          </IconWrapper>
        )}
      </Actions>
    </CardContainer>
  );
};
