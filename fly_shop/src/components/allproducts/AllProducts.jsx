import { useState, useEffect } from 'react';

import { sortAlphabeticallyFunction } from '../../functions/sortAlphabetically';
import { sortByPriceFunction } from '../../functions/sortByPriceFunction';
import { filterPrimary } from '../../functions/filtrPrimary';

import { CategoryNameDescription } from '../../utils/CategoryNameDescription/CategoryNameDescription';
import { AccordionFilter } from '../../utils/Accordion/Accordion';
import { ProductsCounter } from '../../utils/ProductsCounter/ProductsCounter';
import { DropdownSort } from '../../utils/Dropdown/Dropdown';
import { Filter } from '../../utils/FilterModal/Filter';
import { Card } from '../../utils/Cards/Card';

import data from '../../data/data.json'

import styles from './Products.module.css'

export const AllProducts = () => {

    // Functionality Load More
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // Modal
    const [lgShow, setLgShow] = useState(false);

    // Filter
    const [checked, setChecked] = useState([]);
    const [certificate, setCertificate] = useState("");
    const [price, setPrice] = useState("");
    const [filtred, setFiltred] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                const load_more = page * 6
                const product = data.slice(0, load_more);
                setItems(product);
                setTotalPage(Math.ceil(data.length / 6));
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [page])

    const sortAlphabetically = (sortType) => {
        setItems(sortAlphabeticallyFunction(sortType, items))
    }

    const sortByPrice = (sortType) => {
        setItems(sortByPriceFunction(sortType, items))
    }

    const onBrandChange = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    }

    const onCertificateChange = (e) => {
        setCertificate(e.target.value)
    };

    const onPriceChange = (e) => {
        setPrice(e.target.value)
    };

    // Filter
    const filtredItem = filterPrimary(data, checked, certificate, price)
    const onFilter = () => {
        if (lgShow) {
            setChecked([]);
        }
        if (filtredItem.length > 0) {
            setItems(filtredItem);
            setFiltred(true);
            setLgShow(false);
        }
        setLgShow(false)
    }

    return (
        <div className={styles.productContainer}>
            <div id="app" className="container">
                <CategoryNameDescription props={"All product"} />

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                        <Filter
                            handleClose={handleClose}
                            handleShow={handleShow}
                            lgShow={lgShow}
                            filtredItem={filtredItem}
                            AccordionFilter={AccordionFilter}
                            onBrandChange={onBrandChange}
                            certificate={certificate}
                            onCertificateChange={onCertificateChange}
                            price={price}
                            onPriceChange={onPriceChange} onFilter={onFilter}
                        />
                    </div>
                    <div className={styles.columnTwo}>
                        <DropdownSort sortAlphabetically={sortAlphabetically} sortByPrice={sortByPrice} items={items} />
                    </div>
                </div>

                <ProductsCounter items={items} />

                <div className={styles.grid}>
                    {items && items.map(item => (
                        < Card item={item} key={item.id} />
                    ))}
                </div>

                {!filtred &&
                    <div className={styles.buttonDiv}>
                        {page < totalPage
                            ? (
                                <button
                                    className={styles.loadMoreButton}
                                    onClick={() => setPage(page + 1)}
                                >
                                    Load More
                                </button>
                            )
                            :
                            <div className={styles.noMoreProduct}>
                                No More Products
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}
