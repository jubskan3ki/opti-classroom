import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Back from '../index';
import Modal from '../../../../components/Modal/Modal';
import styles from './Room.module.css'
import Image from 'next/image';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import ImgModal from './../../../Asset/png/CardModal1.svg'
import CardAlert from '../../../../components/CardAlert/CardAlert';

export default function Plannig() {
    const router = useRouter();
    const { slug } = router.query;
    const [Alerts, setAlerts] = useState([
      {
          Room: '001',
          Type: 'Securite' ,
          Resum: 'Name1',
          id: 'id1'
      },
      {
          Room: '001',
          Type: 'Securite',
          Resum: 'Name2',
          id: 'id2'
      },
      {
          Room: '001',
          Type: 'Securite',
          Resum: 'Name3',
          id: 'id3'
      },
      {
          Room: '001',
          Type: 'Securite',
          Resum: 'Name4',
          id: 'id4'
      },
      {
          Room: '001',
          Type: 'Securite',
          Resum: 'Name5',
          id: 'id5'
      },
      {
          Room: '001',
          Type: 'Securite',
          Resum: 'Name6',
          id: 'id6'
      }
  ]);

    return (
        <>
            <Back />
            <Modal ToBack='/Planning'>
                {/* <h1>{slug}</h1> */}
                <div className={styles.containerModal}>
                  <div className={styles.LeftSide}>
                  <div className={styles.CardLeft}>
                  <h2> Mes salles </h2>
                    <div className={styles.ScrollContent}>
                      {Alerts.map(AlertItem => (
                            <CardAlert 
                                key={AlertItem.id}
                                Room={AlertItem.Room}
                                Type={AlertItem.Type}
                                Resum={AlertItem.Resum}
                                id={AlertItem.id}
                            />
                        ))}</div>
                    </div>
                    <div className={styles.CardLeft2}>test</div></div>
                  <div className={styles.CardRight}>
                   <h2 className={styles.Title}>Modification d'un événement</h2>
                    <Image className={styles.LoginImg} src={ImgModal} alt='CardLoginLeft' />
                    <div className={styles.InputDiv}>
                      <Input placeholder="Nom de la salle " />
                      <Input placeholder="Nombre de personne max" />
                      <Button text="CONTINUE" />
                    </div>
                  </div>
                </div>
            </Modal>
        </>
    );
}