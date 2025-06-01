import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalProps } from "./modalTypes";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {title && <Title>{title}</Title>}
        {children}
      </ModalBox>
    </Overlay>,
    document.body
  );
};
