import React from 'react';

import { TryDiscount } from './Discount';
import { StarRating } from '../Stars/Stars';

import styles from '../../components/products/Products.module.css'

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
                This is {item.description} | Type {item.type} | Certificate {item.certificate}
            </div>

            <div className={styles.price}>
                <TryDiscount item={item}/>
            </div>

            <div className={styles.star}>
                <StarRating />
            </div>


            <div className={styles.title}>
                <button onClick={onAdd}>Add to cart</button>
            </div>
        </article>
    );
}
