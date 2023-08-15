import { useState } from 'react';

import { TryDiscount } from './Discount';
import { StarRating } from '../Stars/Stars';

import Alert from 'react-bootstrap/Alert';
import styles from '../../components/allproducts/Products.module.css'

export const Card = ({
    item,
}) => {
    const [message, setMessage] = useState("")

    const onAdd = () => {
        setMessage(
            <div className={styles.message}>
                <Alert variant="success">
                    You have successfully added the product
                </Alert>
            </div>
        )
        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    return (
        <article className={styles.article} key={item.id}>
            <div className={styles.title}>
                <h3>{item.title}</h3>
            </div>
            {message}
            <div className={styles.image}>
                <img src={item.image} alt='productImage'/>
            </div>

            <div className={styles.description}>
                This is {item.description} | Type {item.type} | Certificate {item.certificate}
            </div>

            <div className={styles.price}>
                <TryDiscount item={item} />
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
