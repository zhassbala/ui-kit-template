import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "../types";

const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Size variants */
  ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return css`
          padding: 6px 12px;
          font-size: 14px;
          gap: 6px;
        `;
      case "lg":
        return css`
          padding: 12px 24px;
          font-size: 18px;
          gap: 10px;
        `;
      default: // md
        return css`
          padding: 10px 20px;
          font-size: 16px;
          gap: 8px;
        `;
    }
  }}

  /* Full width */
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  /* Variant styles */
  ${({ variant = "primary" }) => {
    switch (variant) {
      case "secondary":
        return css`
          background-color: #6b7280;
          color: white;

          &:hover:not(:disabled) {
            background-color: #4b5563;
          }

          &:active:not(:disabled) {
            background-color: #374151;
          }
        `;

      case "outline":
        return css`
          background-color: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;

          &:hover:not(:disabled) {
            background-color: #eff6ff;
          }

          &:active:not(:disabled) {
            background-color: #dbeafe;
          }
        `;

      case "ghost":
        return css`
          background-color: transparent;
          color: #374151;

          &:hover:not(:disabled) {
            background-color: #f3f4f6;
          }

          &:active:not(:disabled) {
            background-color: #e5e7eb;
          }
        `;

      case "danger":
        return css`
          background-color: #ef4444;
          color: white;

          &:hover:not(:disabled) {
            background-color: #dc2626;
          }

          &:active:not(:disabled) {
            background-color: #b91c1c;
          }
        `;

      default: // primary
        return css`
          background-color: #3b82f6;
          color: white;

          &:hover:not(:disabled) {
            background-color: #2563eb;
          }

          &:active:not(:disabled) {
            background-color: #1d4ed8;
          }
        `;
    }
  }}
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} variant={variant} size={size} fullWidth={fullWidth} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
