import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Login.module.css'
import Image from 'next/image' 
import CardLoginLeft from '../Asset/png/CardLoginLeft.svg';
import CardLoginRight from '../Asset/png/CardLoginRight.svg'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal';
import ModalGestion from '../../components/ModalGestion/ModalGestion';
import Switch from '../../components/Switch/Switch';

export default function Home() {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedSwitch, setIsCheckedSwitch] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <div className={styles.CardLeft}>
                        <h1 className={styles.Title}>Se connecter</h1>
                    <Image  className={styles.LoginImg} src={CardLoginLeft} alt='CardLoginLeft'/>
                    <div className={styles.InputDiv}>
                        <Input placeholder="Entrez votre nom" />
                        <Input placeholder="Adresse email" />
                        <div className={styles.ContainerSwitch}>
                    <Switch id="Switch" isChecked={isChecked} onChange={handleSwitchChange} />
                        <span>Rester connecter ?</span>
                    </div>
                    <Button text="CONTINUE" />
                    </div>
                    </div>
                    
                </div>
            <div className={styles.ContentRight}>
                <div className={styles.CardRight}>
                    <h1 className={styles.Title}>S’inscrire</h1>
                         
                            <Image className={styles.LoginImg}  src={CardLoginRight} alt='CardLoginLeft'/>
                          
                          <div className={styles.InputDiv}>
                            <Input placeholder="Entrez votre nom" />
                            <Input placeholder="Entrez votre prénom" />
                            <Input placeholder="Entrez votre adresse email" />
                            <Input placeholder="Entrez votre mot de passe" />
                            <Button text="CONTINUE" />
                          </div>
                          
                  </div>
                </div>
            </div>
    )
}
