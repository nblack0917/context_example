import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Context } from "../context/ExampleContext";

const useStyles = makeStyles({
  foaasResponse: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textField: {
    width: 300,
  },
  spacer: {
    height: 15,
  },
});

export const FeaturePage = () => {
  const classes = useStyles();

  const {
    needsName,
    setNeedsName,
    needsFrom,
    setNeedsFrom,
    needsThing,
    setNeedsThing,
    name,
    setName,
    from,
    setFrom,
    thing,
    setThing,
    foaas,
    setFoaas,
    handleFOAAS,
    setRandomNumber,
  } = useContext(Context);

  const resetFOAAS = () => {
    setFoaas(null);
    setNeedsName(false);
    setNeedsFrom(false);
    setNeedsThing(false);
    setName("");
    setFrom("");
    setThing("");
    setRandomNumber(Math.floor(Math.random() * 3) + 1);
  };

  return (
    <div>
      {foaas && (
        <div className={classes.foaasResponse}>
          <Typography variant="h3" component="div" sx={{ paddingBottom: 5 }}>
            {foaas.message}
          </Typography>
          <Typography variant="h5" component="div" sx={{ paddingBottom: 15 }}>
            {foaas.subtitle}
          </Typography>
        </div>
      )}
      {needsName && !foaas && (
        <>
          <TextField
            className={classes.textField}
            id="userName_field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            placeholder="Name"
          />
          <div className={classes.spacer}></div>
        </>
      )}
      {needsFrom && !foaas && (
        <>
          <TextField
            className={classes.textField}
            id="userName_field"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            variant="outlined"
            placeholder="From"
          />
          <div className={classes.spacer}></div>
        </>
      )}
      {needsThing && !foaas && (
        <>
          <TextField
            className={classes.textField}
            id="userName_field"
            value={thing}
            onChange={(e) => setThing(e.target.value)}
            variant="outlined"
            placeholder="Thing"
          />
          <div className={classes.spacer}></div>
        </>
      )}
      {!foaas ? (
        <Button variant="contained" onClick={() => handleFOAAS()}>
          Submit
        </Button>
      ) : (
        <Button variant="contained" onClick={() => resetFOAAS()}>
          Another?
        </Button>
      )}
    </div>
  );
};
