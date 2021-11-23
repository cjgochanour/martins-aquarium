const database = {
    fish: [
        {
            id: 1,
            name: "Mittens",
            species: "Catfish",
            location: "Rainforests",
            length: 600,
            diet: "Tuna",
            image: "img/catfish.jpg",
        },
        {
            id: 2,
            name: "Bigsby",
            species: "Colossal-Mouth Bass",
            location: "Earth",
            length: 40000,
            diet: "Crab, Manwich",
            image: "img/bass.jpg",
        },
        {
            id: 3,
            name: "Littlesly",
            species: "Jumbo Shrimp",
            location: "Red Lobster",
            length: 6.4,
            diet: "Java Moss",
            image: "img/shrimp.png",
        },
        {
            id: 4,
            name: "Paul",
            species: "Merman",
            location: "Iceland",
            length: 183,
            diet: "Protein Bars",
            image: "img/merman.jpg",
        },
    ],
    tips: [
        {
            id: 1,
            title: "Vacuum",
            text: "Be sure to vacuum your tank once a week",
        },
        {
            id: 2,
            title: "Food",
            text: "Be sure to heat your fish food for 2 min in the microwave before feeding",
        },
        {
            id: 3,
            title: "Exercise",
            text: "Take your fish on a walk twice a day",
        },
        {
            id: 4,
            title: "Musical Preference",
            text: "Fish prefer the low frequency vibrations of artists like Sunn O))) and Run DMC",
        },
    ],
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = [];

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }
    return holyFish;
};

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = [];

    for (const fish of database.fish) {
        if (fish.length % 5 === 0 && fish.length % 3 != 0) {
            soldiers.push(fish);
        }
    }
    return soldiers;
};

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = [];

    for (const fish of database.fish) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish.push(fish);
        }
    }
    return regularFish;
};

export const getFish = () => {
    return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
    return database.tips.map((tips) => ({ ...tips }));
};
