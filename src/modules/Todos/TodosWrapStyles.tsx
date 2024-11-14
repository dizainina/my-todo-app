import { Button } from "../../components/Button/Button";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const FadeWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden; /* Скрытие переполнения */
  transition: max-height 0.3s ease-in-out; /* Плавный переход по высоте */
  max-height: ${({ isOpen }) =>
    isOpen ? "500px" : "0"}; /* Ограничение высоты */
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${fadeIn} 0.3s forwards
        `
      : css`
          ${fadeOut} 0.3s forwards
        `};
`;

export const TodosWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin: 10px auto;
  background-color: #fff;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid #f4f4f4;
  position: relative;

  /* Псевдоэлемент для нижнего листочка 1 */
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 2px;
    width: 99%;
    height: 4px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }

  /* Псевдоэлемент для нижнего листочка 2 */
  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 4px;
    width: 98%;
    height: 3px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export const Header = styled.h1`
  font-size: 60px;
  font-weight: 100;
  color: #e9b0b0;
  text-align: center;
  margin: 0;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px 5px;
  font-size: 16px;

  &[type="text"]::placeholder {
    font-size: 16px;
    color: #ababab;
    font-style: italic;
    margin-bottom: 3px;
  }
`;

export const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ababab;
  opacity: 0.2;
`;

export const InputWrap = styled.div`
  display: flex;
  padding: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ababab;
  padding: 10px;
`;

export const ArrowButton = styled(Button)`
  width: 25px;
`;

export const OpenTaskList = styled.div`
  transition: display 0.3s ease;
`;
