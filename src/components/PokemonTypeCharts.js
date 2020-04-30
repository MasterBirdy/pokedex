import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../utils/colors";
import { types, typePositions } from "../utils/types";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    tableCell: {
        position: "relative",
        width: "30px",
        height: "30px",
        border: "1px solid #d3d3d3",
        boxSizing: "border-box",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: ".75rem",
        fontWeight: "600",
        color: "white",
        backgroundColor: "#faf8f6",
        transition: ".3s background-color ease-out, .1s transform ease-in",
        cursor: "pointer",
    },
    tableHeader: {
        fontSize: ".8rem",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "600",
        color: "white",
    },
    tableRowStart: {
        borderRadius: "20px",
        padding: "0 5px",
    },
    circle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "24px",
        height: "24px",
        borderRadius: "5px",
    },
    superEffective: {
        backgroundColor: "#009900",
    },
    notVeryEffective: {
        backgroundColor: "#cc0000",
    },
    noEffect: {
        backgroundColor: "#595959",
    },
    highlight: {
        border: "1px solid black",
        backgroundColor: "brown",
        fontSize: ".85rem",
        transform: "scale(1.1)",
    },
}));

const PokemonTypeCharts = () => {
    const styles = useStyles();
    const [attackingType, setAttackingType] = useState("");
    const [defendingType, setDefendingType] = useState("");

    const testFunction = (aType, dType) => {
        if (aType.superEffective) {
            if (aType.superEffective.includes(dType))
                return (
                    <td
                        className={[
                            styles.tableCell,
                            styles.superEffective,
                            aType.name === attackingType &&
                            dType === defendingType
                                ? styles.highlight
                                : null,
                        ].join(" ")}
                        key={aType + dType}
                        onMouseEnter={() =>
                            mouseEnterHandler(aType.name, dType)
                        }
                    >
                        2x
                    </td>
                );
        }
        if (aType.notVeryEffective) {
            if (aType.notVeryEffective.includes(dType))
                return (
                    <td
                        className={[
                            styles.tableCell,
                            styles.notVeryEffective,
                            aType.name === attackingType &&
                            dType === defendingType
                                ? styles.highlight
                                : null,
                        ].join(" ")}
                        key={aType + dType}
                        onMouseEnter={() =>
                            mouseEnterHandler(aType.name, dType)
                        }
                    >
                        .5x
                    </td>
                );
        }
        if (aType.noEffect) {
            if (aType.noEffect.includes(dType))
                return (
                    <td
                        className={[
                            styles.tableCell,
                            styles.noEffect,
                            aType.name === attackingType &&
                            dType === defendingType
                                ? styles.highlight
                                : null,
                        ].join(" ")}
                        key={aType + dType}
                        onMouseEnter={() =>
                            mouseEnterHandler(aType.name, dType)
                        }
                    >
                        0x
                    </td>
                );
        }
        return (
            <td
                className={[
                    styles.tableCell,
                    aType.name === attackingType && dType === defendingType
                        ? styles.highlight
                        : null,
                ].join(" ")}
                key={aType + dType}
                onMouseEnter={() => mouseEnterHandler(aType.name, dType)}
            ></td>
        );
    };

    const mouseEnterHandler = (attackingTypeName, defendingTypeName) => {
        setAttackingType(attackingTypeName);
        setDefendingType(defendingTypeName);
    };

    return (
        <Box>
            <table
                style={{ overflow: "scroll", marginTop: "1rem" }}
                onMouseLeave={() => mouseEnterHandler("", "")}
            >
                <thead>
                    <tr>
                        <td></td>
                        {types.map((type) => (
                            <td
                                className={styles.tableHeader}
                                style={{ backgroundColor: colors[type.name] }}
                                key={type.name}
                            >
                                {type.name.toUpperCase().slice(0, 3)}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {types.map((type) => {
                        return (
                            <tr key={type.name}>
                                <td
                                    className={[
                                        styles.tableHeader,
                                        styles.tableRowStart,
                                    ].join(" ")}
                                    style={{
                                        backgroundColor: colors[type.name],
                                    }}
                                >
                                    {type.name}
                                </td>
                                {Object.entries(typePositions).map(
                                    ([key, value]) => {
                                        return (
                                            <React.Fragment>
                                                {testFunction(type, value)}
                                            </React.Fragment>
                                        );
                                    }
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Box>
    );
};
export default PokemonTypeCharts;
