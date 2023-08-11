import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.paragraphFooter}>This is shop for paragliding equipment</p>
        </div>
    );
}