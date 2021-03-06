export const typePositions = {
    0: "normal",
    1: "fire",
    2: "water",
    3: "electric",
    4: "grass",
    5: "ice",
    6: "fighting",
    7: "poison",
    8: "ground",
    9: "flying",
    10: "psychic",
    11: "bug",
    12: "rock",
    13: "ghost",
    14: "dragon",
    15: "dark",
    16: "steel",
    17: "fairy",
};

export const types = [
    {
        name: "normal",
        notVeryEffective: ["rock", "steel"],
        noEffect: ["ghost"],
    },
    {
        name: "fire",
        superEffective: ["grass", "ice", "bug", "steel"],
        notVeryEffective: ["fire", "water", "rock", "dragon"],
    },
    {
        name: "water",
        superEffective: ["fire", "ground", "rock"],
        notVeryEffective: ["water", "grass", "dragon"],
    },
    {
        name: "electric",
        superEffective: ["water", "flying"],
        notVeryEffective: ["electric", "grass", "dragon"],
        noEffect: ["ground"],
    },
    {
        name: "grass",
        superEffective: ["water", "ground", "rock"],
        notVeryEffective: [
            "fire",
            "grass",
            "poison",
            "flying",
            "dragon",
            "steel",
        ],
    },
    {
        name: "ice",
        superEffective: ["grass", "ground", "flying", "dragon"],
        notVeryEffective: ["fire", "water", "ice", "steel"],
    },
    {
        name: "fighting",
        superEffective: ["normal", "ice", "rock", "dark", "steel"],
        notVeryEffective: ["poison", "flying", "psychic", "bug", "fairy"],
        noEffect: ["ghost"],
    },
    {
        name: "poison",
        superEffective: ["grass", "fairy"],
        notVeryEffective: ["poison", "ground", "rock", "ghost"],
        noEffect: ["steel"],
    },
    {
        name: "ground",
        superEffective: ["fire", "electric", "poison", "rock", "steel"],
        notVeryEffective: ["grass", "bug"],
        noEffect: ["flying"],
    },
    {
        name: "flying",
        superEffective: ["grass", "fighting", "bug"],
        notVeryEffective: ["electric", "rock", "steel"],
    },
    {
        name: "psychic",
        superEffective: ["fighting", "poison"],
        notVeryEffective: ["psychic", "steel"],
        noEffect: ["dark"],
    },
    {
        name: "bug",
        superEffective: ["grass", "psychic", "dark"],
        notVeryEffective: [
            "fire",
            "fighting",
            "poison",
            "flying",
            "ghost",
            "steel",
            "fairy",
        ],
    },
    {
        name: "rock",
        superEffective: ["fire", "ice", "flying", "bug"],
        notVeryEffective: ["fighting", "ground", "steel"],
    },
    {
        name: "ghost",
        superEffective: ["psychic", "ghost"],
        notVeryEffective: ["dark"],
        noEffect: ["normal"],
    },
    {
        name: "dragon",
        superEffective: ["dragon"],
        notVeryEffective: ["steel"],
        noEffect: ["fairy"],
    },
    {
        name: "dark",
        superEffective: ["psychic", "rock"],
        notVeryEffective: ["fighting", "dark", "fairy"],
    },
    {
        name: "steel",
        superEffective: ["ice", "rock", "fairy"],
        notVeryEffective: ["fire", "water", "electric", "steel"],
    },
    {
        name: "fairy",
        superEffective: ["fighting", "dragon", "dark"],
        notVeryEffective: ["fire", "poison", "steel"],
    },
];
