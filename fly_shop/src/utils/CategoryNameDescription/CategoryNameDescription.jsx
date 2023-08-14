import React from 'react';

import styles from './CategoryNameDescription.module.css'

export const CategoryNameDescription = ({
    props,
}) => {
    return (
        <div className={styles.productDescription}>
            <h1 className={styles.headerProductType}>{props}</h1>
            <div className={styles.descriptionProductType}>Here you can find {props.toLowerCase()} in our shop</div>
        </div>
    );
}