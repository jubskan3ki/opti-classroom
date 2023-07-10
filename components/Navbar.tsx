import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.Nav}>
        <Link href="/test">test</Link>
        <Link href="/test/test">test 2</Link>
        <Link href="/">home</Link>
    </div>
  )
}
