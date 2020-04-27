import React, { useMemo } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const nameConverter = (name) => {
    switch (name) {
        case "red":
        case "blue":
            return "Red/Blue";
        case "gold":
        case "heartgold":
            return "Gold";
        case "silver":
        case "soulsilver":
            return "Silver";
        case "firered":
            return "FireRed";
        case "leafgreen":
            return "LeafGreen";
        case "ruby":
        case "sapphire":
            return "Ruby/Sapphire";
        case "black":
        case "white":
            return "Black/White";
        case "black-2":
        case "white-2":
            return "Black/White 2";
        case "ultra-sun":
            return "Ultra Sun";
        case "ultra-moon":
            return "Ultra Moon";
        case "alpha-sapphire":
            return "Alpha Sapphire";
        case "omega-ruby":
            return "Omega Ruby";
        default:
            return name.charAt(0).toUpperCase() + name.slice(1);
    }
};

const PokemonVersionControl = ({ descriptions, version, handler }) => {
    const filteredDescriptions = useMemo(() => {
        const totalTypes = [];
        return descriptions.filter((description) => {
            switch (description.version.name) {
                case "red":
                case "blue":
                    if (["red", "blue"].some((el) => totalTypes.includes(el))) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "gold":
                case "heartgold":
                    if (
                        ["gold", "heartgold"].some((el) =>
                            totalTypes.includes(el)
                        )
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "silver":
                case "soulsilver":
                    if (
                        ["silver", "soulsilver"].some((el) =>
                            totalTypes.includes(el)
                        )
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "ruby":
                case "sapphire":
                    if (
                        ["ruby", "sapphire"].some((el) =>
                            totalTypes.includes(el)
                        )
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "diamond":
                case "pearl":
                case "platinum":
                    if (
                        ["diamond", "pearl", "platinum"].some((el) =>
                            totalTypes.includes(el)
                        )
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "black":
                case "white":
                    if (
                        ["black", "white"].some((el) => totalTypes.includes(el))
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                case "black-2":
                case "white-2":
                    if (
                        ["black-2", "white-2"].some((el) =>
                            totalTypes.includes(el)
                        )
                    ) {
                        return false;
                    }
                    totalTypes.push(description.version.name);
                    return true;
                default:
                    return true;
            }
        });
    }, [descriptions]);
    return (
        <FormControl style={{ width: "100%" }}>
            <InputLabel>Version</InputLabel>
            <Select value={version} onChange={handler}>
                {filteredDescriptions.map((description) => {
                    return (
                        <MenuItem
                            key={description.version.name}
                            value={description.version.name}
                        >
                            {nameConverter(description.version.name)}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default PokemonVersionControl;
