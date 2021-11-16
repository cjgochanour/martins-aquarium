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

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}