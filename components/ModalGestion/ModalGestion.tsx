import React, { ReactNode, useState } from 'react';
import styles from './ModalGestion.module.css'
import Modal from '../Modal/Modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalGestion = ({ isOpen }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };

  const closeModal = () => {
      setModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={modalOpen} onClose={closeModal}>test </Modal>
    </div>
  );
};

export default ModalGestion;

