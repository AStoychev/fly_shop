import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import styles from './Discount.module.css'

export const TryDiscount = ({
    item,
}) => {
    if (item.discountPrice) {
        return (
            <div className={styles.discountOrPrice}>
                <Stack direction="horizontal" gap={3}>
                    <div className={styles.firstDiv}>
                        <Badge bg="secondary">Old Price</Badge>
                        <span className={styles.oldPrice}>${item.price}</span>
                    </div>
                    <div className={styles.secondDiv}>
                        <Badge bg="success">New Price</Badge>
                        ${item.discountPrice}
                    </div>
                </Stack>
            </div>
        )
    }
    return (
        <div >
            <div className={styles.secondDiv}>
                <Badge bg="success">Price</Badge>
                ${item.price}
            </div>
        </div>)
}