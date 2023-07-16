import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Image from 'next/image';
import styles from './Containers.module.css';
import Background from '../../src/Asset/png/Background.png';
import Head from 'next/head';
import { useRouter } from 'next/router'

export default function Containers(props : any) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Opti-ClassRoom</title>
            </Head>
            {router.pathname === '/' ? <div></div> : <Navbar />}
            {props.children}
            <Image className={styles.Background} src={Background} alt='Background'/>
        </>
    )
}
