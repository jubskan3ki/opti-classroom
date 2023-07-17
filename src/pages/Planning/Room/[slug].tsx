import React from 'react';
import { useRouter } from 'next/router';
import Back from '../index';
import Modal from '../../../../components/Modal/Modal';
import styles from './Room.module.css'
import Image from 'next/image';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import ImgModal from './../../../Asset/png/CardModal1.svg'

export default function Plannig() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Back />
            <Modal ToBack='/Planning'>
                <h1>{slug}</h1>
                <div className={styles.containerModal}>
                  <div>gauche</div>
                  <div className={styles.CardRight}>
                  <h1 className={styles.Title}>S’inscrire</h1>
          <Image className={styles.LoginImg} src={ImgModal} alt='CardLoginLeft' />
          <div className={styles.InputDiv}>
            <Input placeholder="Entrez votre nom" />
            <Input placeholder="Entrez votre prénom" />
            <Input placeholder="Entrez votre adresse email" />
            <Button text="CONTINUE" />
          </div>
                  </div>
                </div>
            </Modal>
        </>
    );
}