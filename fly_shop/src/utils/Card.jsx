import React from 'react';

import styles from '../components/products/Products.module.css'

export const Card = ({
    item,
    onAdd,
}) => {

    return (
        <article className={styles.article} key={item.id}>
            <div className={styles.title}>
                <h3>{item.title}</h3>
            </div>

            <div className={styles.image}>
                <img src={item.image} />
            </div>

            <div className={styles.description}>
                {item.description} - {item.type}
            </div>

            <div className={styles.price}>
                {item.price}$
            </div>
            <div className={styles.title}>
                <button onClick={onAdd}>Add to cart</button>
            </div>
        </article>
    );
}
