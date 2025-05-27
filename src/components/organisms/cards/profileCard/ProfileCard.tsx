import styled from "styled-components";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #fff;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  object-fit: cover;
  margin-right: 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const RoleText = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const ProfileCard = ({ imageSrc, name, role }: ProfileCardProps) => {
  return (
    <CardContainer>
      <ProfileImage src={imageSrc} alt={`${name}의 프로필 이미지`} />
      <InfoWrapper>
        <NameText>{name}</NameText>
        <RoleText>{role}</RoleText>
      </InfoWrapper>
    </CardContainer>
  );
};
