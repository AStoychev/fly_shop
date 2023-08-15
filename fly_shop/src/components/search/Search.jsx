import { useState, useEffect } from "react"

import data from '../../data/data.json'

import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

import styles from './Search.module.css'


export const Search = ({
    getDataFromSearch,
}) => {

    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [found, setFound] = useState(true);

    // Get all products
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            setAllProducts(data);
        }
        fetchData()
    }, []);
    // Get all products

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        for (let i in data) {
            if (data[i].title === searchTerm) {
                setValue(searchTerm)
            }
        }
    }

    // Send data to Section
    const ClickHandler = () => {
        // Check for existing product
        let allProducts = []
        for (let i in data) {
            allProducts.push(data[i].title)
        }

        if(!allProducts.includes(value)) {
            setFound(false)
        }

        setTimeout(() => {
            setFound(true)
        }, 2000)
        // Check for existing product

        getDataFromSearch(value)
    }
    // Send data to Section

    return (
        <>
            <div className={styles.searchBar}>
                <button
                    onClick={() => setOpen(!open)} >
                    {
                        !open ?
                            <img src="../images/magnifying-glass.png" alt="Search" title="Search"></img>
                            :
                            <img src="../images/close.png" alt="Close" title="Close Search"></img>
                    }
                </button>
                <div >
                    <Fade in={open}>
                        <div className={styles.searchContainer}>
                            <div className={styles.searchInner}>
                                <input className={styles.searchInput} type="search" value={value} onChange={onChange} />
                                <Button className={styles.searchBtn} variant="info" onClick={ClickHandler}>Search</Button>
                            </div>
                            <div className="dropdown">
                                {allProducts
                                    .filter(item => {
                                        const searchTerm = value.toLowerCase();
                                        const place = item.title.toLowerCase();

                                        return searchTerm && place.startsWith(searchTerm) && place !== searchTerm
                                        // Slice function give limit of the show results
                                    }).slice(0, 1)
                                    .map((item) => (
                                        <div
                                            onClick={() => onSearch(item.title)}
                                            className={styles.dropdownRow}
                                            key={item.id}
                                        >
                                            <span className={styles.spanFindPlace}>{item.title}</span>
                                        </div>
                                    ))}
                            </div>
                            {/* Not Found */}
                            {!found &&
                                <div className={styles.notFoundField}>
                                    <span className={styles.spanNotFound}>Not Found</span>
                                </div>
                            }
                            {/* Not Found */}
                        </div>
                    </Fade >
                </div >
            </div>

        </>
    )
    // )
}