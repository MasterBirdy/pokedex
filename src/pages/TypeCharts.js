import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PokemonTypeCharts from "../components/PokemonTypeCharts";
import AttackTypeChoser from "../components/AttackTypeChoser";
import { Box, Paper, Typography } from "@material-ui/core";
import { types } from "../utils/types";
import PokemonTypes from "../components/PokemonTypes";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            width: "95%",
            margin: "0 auto",
            maxWidth: "600px",
        },
    },
    paper: {
        padding: "1rem",
        textAlign: "center",
    },
    info: {
        textAlign: "left",
        padding: "0 2rem",
        marginTop: "-1.5rem",
        marginBottom: "1rem",
    },
    header: {
        display: "inline-block",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "400",
        fontSize: "1.4rem",
        lineHeight: "1rem",
        marginBottom: ".5rem",
    },
    listing: {
        marginBottom: ".1rem",
    },
    chart: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
}));

const TypeCharts = () => {
    const styles = useStyles();
    const [attackType, setAttackType] = useState("");
    const [superEffective, setSuperEffective] = useState([]);
    const [notVeryEffective, setNotVeryEffective] = useState([]);
    const [noEffect, setNoEffect] = useState([]);

    const clickHandler = (e) => {
        setAttackType(e.target.value);
        const findTypeObject = types.find(
            (element) => element.name === e.target.value
        );
        console.log(findTypeObject);
        console.log(findTypeObject.superEffective);
        if (findTypeObject.superEffective) {
            setSuperEffective([...findTypeObject.superEffective]);
        }
        if (findTypeObject.notVeryEffective) {
            setNotVeryEffective([...findTypeObject.notVeryEffective]);
        }
        if (findTypeObject.noEffect) {
            setNoEffect([...findTypeObject.noEffect]);
        }
    };

    return (
        <Box className={styles.root}>
            <Paper elevation={1} className={styles.paper}>
                <Typography variant="h4">Type Charts</Typography>
                <Typography>
                    Please either select a type on the chart or on the dropdown!
                </Typography>
                <Box className={styles.chart}>
                    <PokemonTypeCharts></PokemonTypeCharts>
                </Box>
                <Box style={{ marginTop: ".25rem" }}>
                    <AttackTypeChoser
                        type={attackType}
                        clicked={clickHandler}
                    ></AttackTypeChoser>
                </Box>
                <Box className={[styles.info].join(" ")}>
                    {attackType !== "" ? (
                        <h5 className={styles.header}>
                            {attackType.slice(0, 1).toUpperCase() +
                                attackType.slice(1) +
                                " Type:"}
                        </h5>
                    ) : null}
                    <div className={styles.listing}>
                        {!!superEffective.length && (
                            <React.Fragment>
                                <Typography style={{ display: "inline" }}>
                                    <span
                                        style={{
                                            fontWeight: "600",
                                            color: "#04690e",
                                        }}
                                    >
                                        Strong
                                    </span>{" "}
                                    against:{" "}
                                </Typography>
                                <PokemonTypes
                                    types={superEffective}
                                ></PokemonTypes>
                            </React.Fragment>
                        )}
                    </div>
                    <div className={styles.listing}>
                        {!!notVeryEffective.length && (
                            <React.Fragment>
                                <Typography style={{ display: "inline" }}>
                                    <span
                                        style={{
                                            fontWeight: "600",
                                            color: "#910602",
                                        }}
                                    >
                                        Weak
                                    </span>{" "}
                                    against:{" "}
                                </Typography>
                                <PokemonTypes
                                    types={notVeryEffective}
                                ></PokemonTypes>
                            </React.Fragment>
                        )}
                    </div>
                    <div className={styles.listing}>
                        {!!noEffect.length && (
                            <React.Fragment>
                                <Typography style={{ display: "inline" }}>
                                    <span
                                        style={{
                                            fontWeight: "600",
                                            color: "#262525",
                                        }}
                                    >
                                        No effect
                                    </span>{" "}
                                    against:{" "}
                                </Typography>
                                <PokemonTypes types={noEffect}></PokemonTypes>
                            </React.Fragment>
                        )}
                    </div>
                </Box>
            </Paper>
        </Box>
    );
};

export default TypeCharts;
