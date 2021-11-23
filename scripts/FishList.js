// Import return database function
import { getFish, mostHolyFish, nonHolyFish, soldierFish } from "./database.js";

export const FishList = () => {
    const fishes = getFish();

    // builds a string filled with HTML
    let htmlString = '<article class="content__fish-list">';

    // creates dynamic HTML to be pushed by main.js
    for (const fish of fishes) {
        htmlString += `<section class="fish__cards card">
            <div><img  class="fish_pic" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>`;
    }
    htmlString += `</article>`;

    return htmlString;
};
