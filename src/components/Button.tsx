import React, { FC } from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  background-color: #fff;
  color: #ababab;
  padding: 3px 5px;
  cursor: pointer;

  &.active {
    border: 1px solid #e9b0b0;
    border-radius: 5px;
  }

  &:hover {
    color: #e9b0b0;
  }
`;
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
  className,
}) => (
  <ButtonStyle onClick={onClick} disabled={disabled} className={className}>
    {children}
  </ButtonStyle>
);
