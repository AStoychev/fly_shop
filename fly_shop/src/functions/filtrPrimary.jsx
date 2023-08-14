export const filterPrimary = (data_product, checked, certificate, price) => {
    const filter = []
    const filtred_item = []

    data_product.map(x => (
        filter.push(x)
    ));

    if (checked.length) {
        for (let x in checked) {
            for (let item in filter) {
                if (filter[item].title === checked[x]) {
                    filtred_item.push(filter[item]);
                };
            };
        };
    };

    if (certificate) {
        for (let item in filter) {
            if (filter[item].certificate === certificate) {
                filtred_item.push(filter[item]);
            };
        };
    };

    if (price) {
        for (let item in filter) {
            let separated_price = price.split("-");
            let min = Number(separated_price[0]);
            let max = Number(separated_price[1]) ? Number(separated_price[1]) : Number.MAX_VALUE;

            let dataPrice = filter[item].discountPrice ? filter[item].discountPrice : filter[item].price

            if (dataPrice >= min && dataPrice <= max) {
                filtred_item.push(filter[item]);
            }

        }
    }
    
    return filtred_item

}
