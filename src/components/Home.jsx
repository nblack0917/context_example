import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";

//Import components that are rendered from Home page
import NavBar from "./NavBar";
import { Login } from "./Login";
import { FeaturePage } from "./FeaturePage";

//Import Context
import { Context } from "../context/ExampleContext";

//create styles for this component
const useStyles = makeStyles({
  appHome: {
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Home = () => {
  //create variable name to access styles
  const classes = useStyles();

  //destructure context for only the states and functions needed
  const { isSignedIn } = useContext(Context);

  return (
    <div>
      <NavBar />
      <div className={classes.appHome}>
        {/* Dynamically Render home page from isSignedIn state from context */}
        {!isSignedIn ? <Login /> : <FeaturePage />}
      </div>
    </div>
  );
};
