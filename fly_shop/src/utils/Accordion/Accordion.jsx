import React from 'react';

import { borderCasesPrice } from '../../functions/borderCasesPrice';

import { brandConstants, certificateConstants, priceConstants } from '../../data/constants';

import Accordion from 'react-bootstrap/Accordion';

import styles from './Accordion.module.css'

export const AccordionFilter = ({
    onBrandChange,
    certificate,
    onCertificateChange,
    price,
    onPriceChange,
}) => {

    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>

                    {brandConstants.map(item => (
                        <label className={styles.labelBrand} key={item}>
                            <input type="checkbox" value={item} onChange={onBrandChange} className={styles.inputStyle}/>
                            {item}
                        </label>
                    ))}

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Certificate</Accordion.Header>
                <Accordion.Body>
                    {certificateConstants.map(item => (
                        <label className={styles.labelBrand} key={item}>
                            <input
                                type="radio"
                                value={item}
                                checked={certificate === item}
                                onChange={onCertificateChange}
                            />
                            {item}
                        </label>
                    ))}
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    {priceConstants.map(item => (
                        <label className={styles.labelBrand} key={item}>
                            <input
                                type="radio"
                                value={item}
                                checked={price === item}
                                onChange={onPriceChange}
                            />
                            {borderCasesPrice(item)}$
                        </label>
                    ))}
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}