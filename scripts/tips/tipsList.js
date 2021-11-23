import { getTips } from "../fish/database.js";

export const tipsList = () => {
    const tips = getTips();

    // builds a string filled with HTML
    let htmlString = "";

    // creates dynamic HTML to be pushed by main.js
    for (const tip of tips) {
        htmlString += `<section class="sidebar__cards">
            <div class="tip__title">${tip.title}</div>
            <div class="tip__text">${tip.text}</div>
        </section>`;
    }
    htmlString += `</article>`;

    return htmlString;
};
