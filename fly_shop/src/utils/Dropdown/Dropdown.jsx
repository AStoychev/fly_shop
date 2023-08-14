import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import styles from '../../components/allproducts/Products.module.css'

export const DropdownSort = ({
    sortAlphabetically,
    sortByPrice,
    items,
}) => {
    return (
        <div className={styles.dropdown}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.dropdownToggle}>
                    <Dropdown.Item onClick={() => sortAlphabetically("az", items)}>Sort Alphabetical A-Z</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortAlphabetically("za", items)}>Sort Alphabetical Z-A</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortByPrice("asc", items)}>Price Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortByPrice("dsc", items)}>Price Descending</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}