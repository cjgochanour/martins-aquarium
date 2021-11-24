import { getFish } from "./fish/database.js";

import { FishList } from "./fish/FishList.js";

import { tipsList } from "./tips/tipsList.js";

import { locationsList } from "./locations/locationsList.js";

const allFish = getFish();

const fishListHTML = document.querySelector(".fishList");

const tipsListHTML = document.querySelector(".sidebar");

const locationsListHTML = document.querySelector(".content__location-list");

tipsListHTML.innerHTML = tipsList();

fishListHTML.innerHTML = FishList();

locationsListHTML.innerHTML = locationsList();
