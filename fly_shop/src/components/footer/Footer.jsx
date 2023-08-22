import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.paragraphFooter}>
                FlyShop is made by <Link to="https://github.com/AStoychev" target="_blank" rel="noopener noreferrer" className={styles.linkGitHub}>
                    A.Stoychev
                </Link>
            </div>
            <div className={styles.paragraphFooter}>
                <Link className={styles.footerImageLink}><img src='../images/instagram-logo.png' alt='instagram' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink}><img src='../images/facebook.png' alt='facebook' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink}><img src='../images/twitter.png' alt='twitter' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink}><img src='../images/mail.png' alt='mail' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink}><img src='../images/apple.png' alt='instagram' className={styles.imageFooter} /></Link>
            </div>
        </div>
    );
}