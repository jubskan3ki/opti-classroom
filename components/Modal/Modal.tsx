import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div>
        <button onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

