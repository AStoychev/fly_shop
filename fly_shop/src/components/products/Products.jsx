import { useState, useEffect } from 'react';

import data_product from '../../data/data.json'
import { filterPrimary } from '../../functions/filtrPrimary';

import { AccordionFilter } from '../../utils/Accordion';
import { DropdownSort } from '../../utils/Dropdown';
import { Card } from '../../utils/Card';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './Products.module.css'

export const Products = () => {

    // Functionality Load More
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // Functionality Sort
    const [sorted, setSorted] = useState({ sorted: "title" });

    // Modal
    const [lgShow, setLgShow] = useState(false);

    // Filter
    const [checked, setChecked] = useState([]);
    const [filtred, setFiltred] = useState(false);
    const [types, setTypes] = useState("")

    // Message on add product
    const [message, setMessage] = useState("")

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    }

    useEffect(() => {
        const fetchData = () => {
            try {
                const product = data_product[page];
                setItems(pre => [...pre, ...product].filter(onlyUnique));

                // This is total of page in my JSON data, but if we use some other data we can change 3 with other dynamically
                setTotalPage(3);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [page])

    const sortAlphabetically = (sortType) => {
        console.log(sortType)
        setSorted({ sorted: "title" });
        const itemsCopy = [...items];
        itemsCopy.sort((titleA, titleB) => {
            const titleItemA = titleA.title;
            const titleItemB = titleB.title;

            if (sortType === "az") {
                return titleItemA.localeCompare(titleItemB);
            } else {
                return titleItemB.localeCompare(titleItemA);
            }
        });
        setItems(itemsCopy)
    }

    const sortByPrice = (sortType) => {
        console.log(sortType)
        setSorted({ sorted: "price" });
        const itemsCopy = [...items];
        itemsCopy.sort((itemA, itemB) => {
            if (sortType === "asc") {
                return itemA.price - itemB.price
            } else {
                return itemB.price - itemA.price
            }
        });
        setItems(itemsCopy)
    }

    const onAdd = () => {
        { console.log("Hello") }
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

    const onBrandChange = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    }

    // Filter
    const filtred_item = filterPrimary(data_product, checked, types)
    const onFilter = () => {
        if (lgShow) {
            setChecked([])
        }
        if (filtred_item.length > 0) {
            setItems(filtred_item.filter(onlyUnique));
            setFiltred(true);
            setLgShow(false);
        }
        setLgShow(false)
    }
    const onTypeChange = (e) => {
        setTypes(e.target.value)
    }

    return (
        <div className={styles.productContainer}>
            <div id="app" className="container">

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                        {message}
                        <div className={styles.dropdown}>
                            <Button variant="secondary" onClick={() => setLgShow(true)}>Open Filter +</Button>
                        </div>

                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Filterered Products {filtred_item.length}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <AccordionFilter onBrandChange={onBrandChange} types={types} onTypeChange={onTypeChange} />
                                <button onClick={onFilter}>Show Result</button>
                            </Modal.Body>
                        </Modal>

                    </div>

                    <div className={styles.columnTwo}>
                        <DropdownSort sortAlphabetically={sortAlphabetically} sortByPrice={sortByPrice} />
                    </div>
                </div>

                <div className={styles.productCounter}>
                    <p className={styles.paragrphCounter}>{items.length} Products</p>
                </div>

                <div className={styles.grid}>
                    {items && items.map(item => (
                        < Card item={item} onAdd={onAdd} key={item.id} />
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
