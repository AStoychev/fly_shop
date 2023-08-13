import React from 'react';

export const takeType = (product, type) => {
    let producType = []
    for (let i in product) {
        if (product[i]["type"] === type) {
            producType.push(product[i])
        }
    }
    return producType
}
