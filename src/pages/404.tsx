import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Eror404 from '../Asset/png/Eror404.png';
import styles from './404.module.css';


export default function Error404() {
    return (
        <>

            <div className={styles.Error404}>
                <Image src={Eror404} alt='Eror404'/>
            </div>

        </>
    )
}
