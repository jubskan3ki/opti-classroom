import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Login.module.css'
import Image from 'next/image' 
import CardLoginLeft from '../Asset/png/CardLoginLeft.svg';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Switch from '../../components/Switch/Switch';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  return (
      <main >
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <div className={styles.CardLeft}>
                    <h1 className={styles.Title}>Se connecter</h1>
                    <Image className={styles.Img} src={CardLoginLeft} alt='CardLoginLeft'/>
                    <Input placeholder="Entrez votre nom" />
                    <Input placeholder="Adresse email" />
                    <switch>test</switch>
                    <Switch label="test" onChange={handleSwitchChange}/>
                    <Button text="CONTINUE" />
                </div>
            </div>
            <div className={styles.ContentRight}><div className={styles.CardRight}>test</div></div>
        </div>
      </main>

  )
}
