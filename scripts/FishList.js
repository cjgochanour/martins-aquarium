// Import return database function
import { mostHolyFish, nonHolyFish, soldierFish } from "./database.js";

export const FishList = () => {
    const orderedFish = [mostHolyFish(), soldierFish(), nonHolyFish()];

    // builds a string filled with HTML
    let htmlString = '<article class="content__fish-list">';

    // creates dynamic HTML to be pushed by main.js
    for (const fish of orderedFish) {
        for (const eachFish of fish) {
            htmlString += `<section class="fish__cards card">
            <div><img  class="fish_pic" src="${eachFish.image}" /></div>
            <div class="fish__name">${eachFish.name}</div>
            <div class="fish__species">${eachFish.species}</div>
            <div class="fish__length">${eachFish.length}</div>
            <div class="fish__location">${eachFish.location}</div>
            <div class="fish__diet">${eachFish.diet}</div>
        </section>`;
        }
    }
    htmlString += `</article>`;

    return htmlString;
};
