import React, { PropsWithChildren } from 'react';
import styles from "@/styles/Layout.module.css";
import Navbar from '../Navbar';

function Layout({children}: PropsWithChildren) {
    return (
        <div className={styles.mainBloc}>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;