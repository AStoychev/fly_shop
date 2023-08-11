import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Wings</Nav.Link>
                        <Nav.Link href="#pricing">Harness</Nav.Link>

                        <Link className={styles.logo} to="/">
                            <div>FlyShop 2023
                                <img src='../images/paper-plane.png' />
                            </div>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}