// Import return database function
import { getLocations } from "../fish/database.js";

export const locationsList = () => {
    const list = getLocations();

    // builds a string
    let htmlString = "";

    // creates dynamic HTML to be pushed by main.js
    for (const spot of list) {
        htmlString += `<section class="location__cards card">
            <div><img  class="location_image" src="${spot.image}" /></div>
            <div class="location__name">${spot.name}</div>
            <div class="location__info">${spot.info}</div>
        </section>`;
    }
    htmlString += `</article>`;

    return htmlString;
};
