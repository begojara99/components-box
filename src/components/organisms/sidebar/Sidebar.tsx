import styled from "styled-components";
import { SidebarProps } from "./sidebarTypes";

const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: #111827;
  color: #f9fafb;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 32px;
  font-size: 20px;
  font-weight: bold;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #9ca3af;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;

    svg {
      stroke: #ffffff;
    }
  }
`;

export const Sidebar = ({ logo, items }: SidebarProps) => {
  return (
    <SidebarContainer>
      {logo && <LogoWrapper>{logo}</LogoWrapper>}
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            <item.icon size={18} stroke="#9ca3af" />
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};
