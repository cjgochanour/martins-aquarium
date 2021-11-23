import { getFish } from "./fish/database.js";

const allFish = getFish();

import { FishList } from "./fish/FishList.js";

const fishListHTML = document.querySelector(".fishList");

import { tipsList } from "./tips/tipsList.js";

const tipsListHTML = document.querySelector(".sidebar");

tipsListHTML.innerHTML = tipsList();

fishListHTML.innerHTML = FishList();
