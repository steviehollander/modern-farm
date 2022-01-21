export const harvestPlants = (plantArray) => {
    const plantHarvest = []






    for (const plant of plantArray) {

        if (plant.type === "Corn") {
            const output = plant.output / 2
            for (let i = 0; i < output; i++) {
                plantHarvest.push(plant)
            }
        }



        else {
            const output = plant.output
            for (let i = 0; i < output; i++) {
                plantHarvest.push(plant)
            }


        }



    }
    return plantHarvest

}