export const catalog = (harvest) => {

    let string = ""
    for (const plant of harvest) {

        string = `<section class="plant">${plant.type}</section>`

    }
    return string

}