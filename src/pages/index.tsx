import Head from 'next/head'
import styles from './Login.module.css'
 


export default function Home() {
  return (
      <main >
        
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.CardLeft}>
              <h1 className={styles.Title}>Se connecter</h1>
              <img src='./CardLoginLeft.png' alt='ImgLoginLeft'></img>
              <input placeholder='test'/>
              <input placeholder='test'/>
              <button>test</button>

              </div>
          </div>
          <div className={styles.ContentRight}><div className={styles.CardRight}>test</div></div>
        </div>
      </main>
  )
}
