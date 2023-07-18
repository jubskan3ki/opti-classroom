import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: ReactNode;
  ToBack: string;
}

const Modal = ({ children, ToBack }: ModalProps) => {
  return (
    <div>
      <div className={styles.Modal}>
        <div className={styles.ModalContente}>
          <div className={styles.ModalOverFlow} >
            <Link className={styles.iconBack} href={ToBack || ''}>
                <FontAwesomeIcon icon={faSquareXmark} />
            </Link>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 