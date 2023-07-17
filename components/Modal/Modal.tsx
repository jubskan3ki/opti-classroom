import React, { ReactNode } from 'react';
import styles from './Modal.module.css'

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
      <div className={styles.Modal}>
        <button className={styles.ButtonClose} onClick={onClose}>test</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

