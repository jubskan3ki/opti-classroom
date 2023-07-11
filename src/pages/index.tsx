import Head from 'next/head'
import styles from './Login.module.css'
import Image from 'next/image' 
import CardLoginLeft from '../Asset/png/CardLoginLeft.png';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

export default function Home() {
  return (
      <main >
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <div className={styles.CardLeft}>
                    <h1 className={styles.Title}>Se connecter</h1>
                    <Image src={CardLoginLeft} alt='CardLoginLeft'/>
                    <Input placeholder="Entrez votre nom" />
                    <input className={styles.input} placeholder='test'/>
                    <switch>test</switch>
                    <Button text="CONTINUE" />
                </div>
            </div>
            <div className={styles.ContentRight}><div className={styles.CardRight}>test</div></div>
        </div>
      </main>

  )
}
