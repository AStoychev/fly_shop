import React from 'react';

export const filterPrimary = (data_product, checked, types) => {
    const filter = []
    const filtred_item = []
    
    Object.values(data_product).map(x => (
        x.filter(item => (
            filter.push(item)
        ))
    ))
    
    for (let x in checked) {
        for (let item in filter) {
            if (filter[item].title === checked[x]) {
                filtred_item.push(filter[item])
            }
        }
    }

    for (let item in filter) {
        if (filter[item].type === types) {
            filtred_item.push(filter[item])
        }
    }
    return filtred_item
}
