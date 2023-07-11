import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Image from 'next/image';
import styles from './Containers.module.css';
import Background from './../Union.svg';
export default function Containers(props : any) {
  return (
    <>
        <Navbar />
        {props.children}
        <Image className={styles.Background} src={Background} alt='Background'/>
    </>
  )
}
