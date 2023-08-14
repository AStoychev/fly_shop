export const sortByPriceFunction = (sortType, items) => {
    let priceA = "";
    let priceB = "";
    const itemsCopy = [...items];

    itemsCopy.sort((itemA, itemB) => {
        priceA = itemA.discountPrice ? itemA.discountPrice : itemA.price;
        priceB = itemB.discountPrice ? itemB.discountPrice : itemB.price;

        if (sortType === "asc") {
            return priceA - priceB
        } else {
            return priceB - priceA
        }
    });

    return itemsCopy
}