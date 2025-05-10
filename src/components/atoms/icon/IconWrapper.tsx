import styled from "styled-components";
import { IconWrapperProps } from "./iconTypes";

const StyledIcon = styled.span<{ size: number; color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    stroke: ${({ color }) => color};
  }
`;

export const IconWrapper = ({
  size = 20,
  color = "#374151",
  children,
}: IconWrapperProps) => {
  return (
    <StyledIcon size={size} color={color}>
      {children}
    </StyledIcon>
  );
};
