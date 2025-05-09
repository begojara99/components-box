import styled, { css } from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const buttonStyles = {
  primary: css`
    background-color: #2563eb;
    color: white;
    &:hover {
      background-color: #1d4ed8;
    }
    &:disabled {
      background-color: #93c5fd;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
    &:hover {
      background-color: #e5e7eb;
    }
  `,
  icon: css`
    background: none;
    border: none;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const StyledButton = styled.button<{ variant: Variant }>`
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  border: none;

  ${({ variant }) => buttonStyles[variant]}
`;

export const VariantButton = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
