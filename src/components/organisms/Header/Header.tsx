import styled from "styled-components";
import { IconWrapper } from "../../atoms/icon/IconWrapper";
import { Bell, User } from "lucide-react";

interface HeaderProps {
  logo?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Header = ({ logo, rightContent }: HeaderProps) => {
  return (
    <Wrapper>
      <Left>{logo || <DefaultLogo>MyApp</DefaultLogo>}</Left>
      <Right>
        {rightContent || (
          <>
            <IconWrapper>
              <Bell size={20} />
            </IconWrapper>
            <IconWrapper>
              <User size={20} />
            </IconWrapper>
          </>
        )}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DefaultLogo = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
