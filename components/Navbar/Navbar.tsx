import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse , faClipboardList , faCalendarDays ,faGear , faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()

    return (
        <div className={styles.Nav}>
            <div>
                <Link href="/Home" passHref className={router.pathname === '/Home' ? styles.selected : ''}> <FontAwesomeIcon icon={faHouse} /> </Link>
                <Link href="/Planning" passHref className={router.pathname === '/Planning' ? styles.selected : ''}><FontAwesomeIcon icon={faCalendarDays} /></Link>
                <Link href="/Alert" passHref className={router.pathname === '/Alert' ? styles.selected : ''}><FontAwesomeIcon icon={faClipboardList} /></Link>
                <Link href="/Setting" passHref className={router.pathname === '/Setting' ? styles.selected : ''}><FontAwesomeIcon icon={faGear} /></Link>
            </div>
            <div>
                <button className={styles.selected}><FontAwesomeIcon icon={faArrowRightToBracket} /></button>
            </div>
                
        </div>
    )
}
