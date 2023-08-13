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
                    <h5>
                        <Badge bg="secondary">Old Price: <span className={styles.oldPrice}>${item.price}</span></Badge>
                    </h5>
                    <h5>
                        <Badge bg="success">New Price: ${item.discountPrice}</Badge>
                    </h5>
                </Stack>
            </div>
        )
    }
    return (
        <div>
            <h5>
                <Badge bg="success">Price: ${item.price}</Badge>
            </h5>
        </div>)
}