/* eslint-disable no-fallthrough */
import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        maxWidth: "250px",
        marginTop: ".33rem",
    },
});

const PokemonMoveTable = ({ moves, version }) => {
    const styles = useStyles();
    const pokemonMoves = [];
    moves.forEach((move) => {
        const findMoveIndex = move.version_group_details.findIndex(
            (theVersion) => {
                switch (version) {
                    case "red":
                        if (
                            theVersion.version_group.name ===
                            "firered-leafgreen"
                        )
                            return false;
                    case "gold":
                    case "silver":
                        if (
                            theVersion.version_group.name ===
                            "heartgold-soulsilver"
                        )
                            return false;
                    case "ruby":
                    case "sapphire":
                        if (
                            theVersion.version_group.name ===
                            "omega-ruby-alpha-sapphire"
                        )
                            return false;
                    case "black":
                    case "white":
                        if (theVersion.version_group.name === "black-2-white-2")
                            return false;
                    default:
                        return (
                            theVersion.version_group.name.includes(version) &&
                            theVersion.move_learn_method.name === "level-up"
                        );
                }
            }
        );
        if (findMoveIndex !== -1) {
            const formattedName =
                move.move.name.charAt(0).toUpperCase() +
                move.move.name.slice(1).replace(/-([a-z])/g, (g) => {
                    return " " + g[1].toUpperCase();
                });
            pokemonMoves.push({
                name: formattedName,
                level:
                    move.version_group_details[findMoveIndex].level_learned_at,
            });
        }
    });
    pokemonMoves.sort((a, b) => {
        if (a.level > b.level) {
            return 1;
        } else if (a.level < b.level) {
            return -1;
        } else {
            return 0;
        }
    });
    return (
        <Table size="small" className={styles.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Move</TableCell>
                    <TableCell align="center">Level</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemonMoves.map((move) => (
                    <TableRow key={move.name}>
                        <TableCell>{move.name}</TableCell>
                        <TableCell align="center">{move.level}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PokemonMoveTable;
