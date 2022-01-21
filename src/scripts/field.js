export const growingInField = []

export const addPlants = (seeds) => {
    const isCorn = Array.isArray(seeds)
    if (isCorn) {
        for (const corn of seeds) {
            growingInField.push(corn)
        }
    } else {
        growingInField.push(seeds)
    }

}

export const usePlants = () => {
    return growingInField


}