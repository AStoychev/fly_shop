export const borderCasesPrice = (item) => {
    let split_item = item.split("-")
    if (split_item[0] === "0") {
        return "Under 1000"
    } else if (split_item[0] === "3000") {
        return `Over ${split_item[0]}`
    } else {
        return `${split_item[0]}-${split_item[1]}`
    }
}