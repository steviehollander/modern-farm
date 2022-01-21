console.log("Welcome to the main module")
import { usePlants } from "./field.js"
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()


import { addPlants } from "./field.js"

const seed = {

}

const letsPlant = plantSeeds(yearlyPlan)

addPlants(letsPlant)

const plantTheDamnThing = usePlants()

const theHarvest = harvestPlants(plantTheDamnThing)


const catalogVariable = catalog(theHarvest)


document.querySelector('.container').innerHTML += catalogVariable





console.log(catalogVariable)

import { plantSeeds } from "./tractor.js"
import { catalog } from "./catalog.js"
import { growingInField } from "./field.js"
import { harvestPlants } from "./harvest.js"

