import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Navbar bg="dark" data-bs-theme="dark" className={styles.navBar}>
                <Container>
                    <Nav className="me-auto">

                        <Link className={styles.navLink} to="/">Home</Link>
                        <Link className={styles.navLink} to="/wings">Wings</Link>
                        <Link className={styles.navLink} to="/harnesses">Harnesses</Link>

                        <Link className={styles.logo} to="/">
                            <div>FlyShop 2023
                                <img src='../images/paper-plane.png' alt='logo'/>
                            </div>
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}