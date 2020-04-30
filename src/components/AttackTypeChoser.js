import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../utils/types";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "150px",
    },
}));

const AttackTypeChoser = ({ type, clicked }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Attacking Type</InputLabel>
            <Select value={type} onChange={clicked}>
                {types.map((type) => (
                    <MenuItem value={type.name}>{type.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default AttackTypeChoser;
