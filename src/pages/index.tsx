import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Login.module.css'
import Image from 'next/image' 
import CardLoginLeft from '../Asset/png/CardLoginLeft.svg';
import CardLoginRight from '../Asset/png/CardLoginRight.svg'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Switch } from '@nextui-org/react';
import Modal from '../../components/Modal/Modal';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
      <main >
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <div className={styles.CardLeft}>
                        <h1 className={styles.Title}>Se connecter</h1>
                    <div className={styles.Img}>
                        <Image  src={CardLoginLeft} alt='CardLoginLeft'/>
                    </div>
                    <Input placeholder="Entrez votre nom" />
                    <Input placeholder="Adresse email" />
                    <div className={styles.ContainerSwitch}>
                        <Switch className={styles.Switch}/>
                        <span>Rester connecter ?</span>
                    </div>
                    <Button text="CONTINUE" />
                </div>
            </div>
            <div className={styles.ContentRight}>
                <div className={styles.CardRight}>
                    <h1 className={styles.Title}>S’inscrire</h1>
                          <div className={styles.Img}>
                            <Image  src={CardLoginRight} alt='CardLoginLeft'/>
                          </div>
                          <Input placeholder="Entrez votre nom" />
                          <Input placeholder="Entrez votre prénom" />
                          <Input placeholder="Entrez votre adresse email" />
                          <Input placeholder="Entrez votre mot de passe" />
                          <Button text="CONTINUE" onClick={openModal}/>
                  </div>
            </div>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <h2>test modal</h2>
                </Modal>
        </div>
      </main>

  )
}
