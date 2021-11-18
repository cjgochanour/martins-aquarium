const database = {
    fish: [
        {
            name: "Mittens",
            species: "Catfish",
            location: "Rainforests",
            length: 600,
            diet: "Tuna",
            image: "img/catfish.jpg",
        },
        {
            name: "Bigsby",
            species: "Colossal-Mouth Bass",
            location: "Earth",
            length: 40000,
            diet: "Crab, Manwich",
            image: "img/bass.jpg",
        },
        {
            name: "Littlesly",
            species: "Jumbo Shrimp",
            location: "Red Lobster",
            length: 6.4,
            diet: "Java Moss",
            image: "img/shrimp.png",
        },
        {
            name: "Paul",
            species: "Merman",
            location: "Iceland",
            length: 183,
            diet: "Protein Bars",
            image: "img/merman.jpg",
        },

    ]
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for () {

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}