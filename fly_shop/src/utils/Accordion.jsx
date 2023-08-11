import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

import styles from '../components/products/Products.module.css'

export const AccordionFilter = ({
    onBrandChange,
    types,
    onTypeChange,
}) => {
    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>

                    <label className={styles.labelBrand}>
                        <input type="checkbox" value={"Advance"} onChange={onBrandChange} />
                        Advance
                    </label>
                    <label className={styles.labelBrand}>
                        <input type="checkbox" value={"Niviuk"} onChange={onBrandChange} />
                        Niviuk
                    </label>
                    <label className={styles.labelBrand}>
                        <input type="checkbox" value={"Ozone"} onChange={onBrandChange} />
                        Ozone
                    </label>
                    <label className={styles.labelBrand}>
                        <input type="checkbox" value={"Skywalk"} onChange={onBrandChange} />
                        Skywalk
                    </label>

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Type</Accordion.Header>
                <Accordion.Body>
                    <label className={styles.labelBrand}>
                        <input
                            type="radio"
                            value="wing"
                            checked={types === "wing"}
                            onChange={onTypeChange}
                        />
                        Wing
                    </label>

                    <label className={styles.labelBrand}>
                        <input
                            type="radio"
                            value="harness"
                            checked={types === "harness"}
                            onChange={onTypeChange}
                        />
                        Harness
                    </label>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}