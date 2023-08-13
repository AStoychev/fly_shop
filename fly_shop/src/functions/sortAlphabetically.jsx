export const sortAlphabeticallyFunction = (sortType, items) => {
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
    return itemsCopy
}