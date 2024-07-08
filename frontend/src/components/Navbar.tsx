import Image from 'next/image';
import styles from "@/styles/Navbar.module.css"
import Link from 'next/link';
import React from 'react';


function Navbar() {
    return (
        <nav>
             <div className={styles.navbar}>
                <Link href="/">
                     <Image alt="logo" src="/next.svg" width={60} height={60} />
                </Link>
            </div>
            <div>
                <Link className={styles.countryButton} href="/">
                    Home
                </Link>
                <Link className={styles.countryButton} href="/view/list" >
                    Countries
                </Link>
                <Link className={styles.countryButton} href="/countries/create" >
                    Add a country
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;