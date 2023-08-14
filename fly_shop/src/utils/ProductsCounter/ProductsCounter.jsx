import styles from './ProductsCounter.module.css'

export const ProductsCounter = ({
    items,
}) => {
    return (
        <div className={styles.productCounter}>
            <p className={styles.paragrphCounter}>{items.length} Products</p>
        </div>
    );
}
