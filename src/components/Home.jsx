import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import NavBar from "./NavBar";
import { Login } from "./Login";
import { FeaturePage } from "./FeaturePage";

import { Context } from "../context/ExampleContext";

const useStyles = makeStyles({
  appHome: {
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
});

export const Home = () => {
  const classes = useStyles();

  const { isSignedIn, setIsSignedIn } = useContext(Context);

  return (
    <div>
      <NavBar />
      <div className={classes.appHome}>
        {!isSignedIn ? <Login /> : <FeaturePage />}
      </div>
    </div>
  );
};
