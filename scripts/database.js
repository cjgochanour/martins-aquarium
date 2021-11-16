const database = {
    fish: [
        {
            name: "Mittens",
            species: "Catfish",
            location: "Rainforests",
            length: 600,
            diet: "Tuna",
        },
        {
            name: "Bigsby",
            species: "Colossal-Mouth Bass",
            location: "Earth",
            length: 40000,
            diet: "Crab, Manwich",
        },
        {
            name: "Littlesly",
            species: "Jumbo Shrimp",
            location: "Red Lobster",
            length: 6.4,
            diet: "Java Moss",
        },
        {
            name: "Paul",
            species: "Merman",
            location: "Iceland",
            length: 183,
            diet: "Protein Bars",
        },

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}