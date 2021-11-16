import { getFish } from './database.js'

const allFish = getFish()

import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".fishList")

parentHTMLElement.innerHTML = FishList()