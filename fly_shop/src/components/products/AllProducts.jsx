import { useState, useEffect } from 'react';

import { sortAlphabeticallyFunction } from '../../functions/sortAlphabetically';
import { filterPrimary } from '../../functions/filtrPrimary';

import { CategoryNameDescription } from '../../utils/CategoryNameDescription/CategoryNameDescription';
import { AccordionFilter } from '../../utils/Accordion/Accordion';
import { DropdownSort } from '../../utils/Dropdown/Dropdown';
import { Filter } from '../../utils/FilterModal/Filter';
import { Card } from '../../utils/Cards/Card';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import data from '../../data/data.json'

import styles from './Products.module.css'

export const AllProducts = () => {

    // Functionality Load More
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // Functionality Sort
    // const [sorted, setSorted] = useState({ sorted: "title" });

    // Modal
    const [lgShow, setLgShow] = useState(false);

    // Filter
    const [checked, setChecked] = useState([]);
    const [filtred, setFiltred] = useState(false);
    const [certificate, setCertificate] = useState("");
    const [price, setPrice] = useState("");

    // Message on add product
    const [message, setMessage] = useState("")

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    }

    useEffect(() => {
        const fetchData = () => {
            try {
                const load_more = page * 6
                const product = data.slice(0, load_more);
                setItems(product);
                // setItems(pre => [...pre, ...product].filter(onlyUnique));

                setTotalPage(Math.ceil(data.length / 6));
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [page])

    // Sort Alphabetically
    // const sortAlphabetically = sortAlphabeticallyFunction()
    // setItems(sortAlphabetically)

    const sortAlphabetically = (sortType) => {
        // setSorted({ sorted: "title" });
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
        // setSorted({ sorted: "price" });
        const itemsCopy = [...items];
        itemsCopy.sort((itemA, itemB) => {
            // let priceA = itemA.discountPrice ? itemA.discountPrice : itemA.price;
            // let priceB = itemB.discountPrice ? itemB.discountPrice : itemB.price;
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
    const filtred_item = filterPrimary(data, checked, certificate, price)

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
    const onCertificateChange = (e) => {
        setCertificate(e.target.value)
    };

    const onPriceChange = (e) => {
        setPrice(e.target.value)
    };

    return (
        <div className={styles.productContainer}>
            <div id="app" className="container">
                <CategoryNameDescription props={"All product"}/>

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                        {message}

                        <div>
                            <Button variant="secondary" onClick={() => setLgShow(true)}>Open Filter +</Button>
                        </div>

                        <Modal
                            className={styles.modalContainer}
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Filtered Products {filtred_item.length}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <AccordionFilter
                                    onBrandChange={onBrandChange}
                                    certificate={certificate}
                                    onCertificateChange={onCertificateChange}
                                    price={price}
                                    onPriceChange={onPriceChange}
                                />
                                <Button variant="primary" onClick={onFilter}>Show Result</Button>
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div className={styles.columnTwo}>
                        {/* Can remove items */}
                        <DropdownSort sortAlphabetically={sortAlphabetically} items={items} sortByPrice={sortByPrice} />
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
