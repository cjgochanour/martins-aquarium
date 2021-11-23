import { getFish } from "./fish/database.js";

const allFish = getFish();

import { FishList } from "./fish/FishList.js";

const parentHTMLElement = document.querySelector(".fishList");

parentHTMLElement.innerHTML = FishList();
