import { AccordionFilter } from '../Accordion/Accordion';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from '../../components/allproducts/Products.module.css'

export const Filter = ({
    handleClose,
    handleShow,
    lgShow,
    filtredItem,
    onBrandChange,
    certificate,
    onCertificateChange,
    price,
    onPriceChange,
    onFilter,
    product,
}) => {

    return (
        <>
            <div >
                < Button variant="secondary" onClick={handleShow}> Open Filter +</Button >
            </div >

            <Modal
                className={styles.modalContainer}
                size="lg"
                show={lgShow}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Filtered Products {filtredItem.length}
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
        </>
    );
}