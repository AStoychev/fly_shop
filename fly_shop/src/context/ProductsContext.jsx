import { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({
    children,
}) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

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

    const contextValues = {
        items,
        page,
        totalPage
    };

    return (
        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext);

    return context
}