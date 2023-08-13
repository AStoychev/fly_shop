// import { useState } from 'react';

// import { AccordionFilter } from '../Accordion';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import styles from '../../components/products/Products.module.css'

// export const Filter = ({
//     filtred_item,
//     onBrandChange,
//     certificate,
//     onCertificateChange,
//     price,
//     onPriceChange,
//     onFilter
// }) => {
//     const [lgShow, setLgShow] = useState(false);
//     return (
//         <>
//             <div >
//                 {/* <div className={styles.dropdown}> */}
//                 < Button variant="secondary" onClick={() => setLgShow(true)}> Open Filter +</Button >
//             </div >

//             <Modal
//                 size="lg"
//                 show={lgShow}
//                 onHide={() => setLgShow(false)}
//                 aria-labelledby="example-modal-sizes-title-lg"
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-modal-sizes-title-lg">
//                         Filtered Products {filtred_item.length}
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <AccordionFilter
//                         onBrandChange={onBrandChange}
//                         certificate={certificate}
//                         onCertificateChange={onCertificateChange}
//                         price={price}
//                         onPriceChange={onPriceChange}
//                     />
//                     <Button variant="primary" onClick={onFilter}>Show Result</Button>
//                     {/* <button onClick={onFilter} className={styles.showResult}>Show Result</button> */}
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }




{/* <Filter
    filtred_item={filtred_item}
    AccordionFilter={AccordionFilter}
    onBrandChange={onBrandChange}
    certificate={certificate}
    onCertificateChange={onCertificateChange}
    price={price}
    onPriceChange={onPriceChange} onFilter={onFilter} /> */}