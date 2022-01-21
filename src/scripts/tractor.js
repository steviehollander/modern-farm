
import { addPlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"


export const plantSeeds = (plan) => {
    let seedObject = ""
    for (const row of plan) {
        for (const plant of row) {
            if (plant == "Asparagus") {
                seedObject = createAsparagus()


            }



            else if (plant == "Corn") {
                seedObject = createCorn()

            }
            else if (plant == "Soybean") {
                seedObject = createSoyBean()

            }
            else if (plant == "Sunflower") {
                seedObject = createSunFlower()

            }
            else if (plant == "Potato") {
                seedObject = createPotato()

            }
            else if (plant == "Wheat") {
                seedObject = createWheat()

            }
            addPlants(seedObject)

        }

    }
}

