import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/intro">Intro</Link></li>
            <li><Link href="/">intro</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;
