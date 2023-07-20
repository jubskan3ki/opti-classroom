import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faClipboardList,
  faCalendarDays,
  faGear,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Définir la largeur à partir de laquelle vous souhaitez afficher le menu mobile
    };

    handleResize(); // Appel initial pour définir l'état en fonction de la taille de l'écran au chargement de la page

    window.addEventListener('resize', handleResize); // Ajouter un écouteur d'événements pour détecter les changements de taille de l'écran

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyer l'écouteur d'événements lors du démontage du composant
    };
  }, []);

  return (
    <div className={styles.Nav}>
        {isMobile ? (
            <>
            <Link href="/Home" passHref>
                <FontAwesomeIcon
                icon={faHouse}
                className={router.pathname === '/Home' ? styles.selected : ''}
                />
            </Link>
            <Link href="/Planning" passHref>
                <FontAwesomeIcon
                icon={faCalendarDays}
                className={router.pathname === '/Planning' ? styles.selected : ''}
                />
            </Link>
            <Link href="/Alert" passHref>
                <FontAwesomeIcon
                icon={faClipboardList}
                className={router.pathname === '/Alert' ? styles.selected : ''}
                />
            </Link>
            <Link href="/Setting" passHref>
                <FontAwesomeIcon
                icon={faGear}
                className={router.pathname === '/Setting' ? styles.selected : ''}
                />
            </Link>
            </>
        ) : (
            <div>
                <Link href="/Home" passHref>
                <FontAwesomeIcon
                    icon={faHouse}
                    className={router.pathname === '/Home' ? styles.selected : ''}
                />
                </Link>
                <Link href="/Planning" passHref>
                <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={router.pathname === '/Planning' ? styles.selected : ''}
                />
                </Link>
                <Link href="/Alert" passHref>
                <FontAwesomeIcon
                    icon={faClipboardList}
                    className={router.pathname === '/Alert' ? styles.selected : ''}
                />
                </Link>
                <Link href="/Setting" passHref>
                <FontAwesomeIcon
                    icon={faGear}
                    className={router.pathname === '/Setting' ? styles.selected : ''}
                />
                </Link>
            </div>
        )}
      <button className={styles.selected}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </button>
    </div>
  );
}
