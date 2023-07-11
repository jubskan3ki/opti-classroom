import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className={styles.Nav}>
      <div>
        <Link href="/home" passHref> <FontAwesomeIcon icon={faHouse} /> </Link>
        <Link href="/alert" passHref><FontAwesomeIcon icon={faHouse} /></Link>
        <Link href="/" passHref><FontAwesomeIcon icon={faHouse} /></Link>
        <Link href="/planning" passHref><FontAwesomeIcon icon={faHouse} /></Link>
      </div>
      <div>
        <Link href="/planning" passHref><FontAwesomeIcon icon={faHouse} /></Link>
      </div>
        
    </div>
  )
}
