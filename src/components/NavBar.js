import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RocketIcon from "@mui/icons-material/Rocket";
import { makeStyles } from "@mui/styles";

//Import Context
import { Context } from "../context/ExampleContext";

//create styles for this component
const useStyles = makeStyles({
  navBar: {
    width: "100%",
    height: "100",
    display: "flex",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  navOptions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
});

export default function NavBar() {
  //create variable name to access styles
  const classes = useStyles();

  //destructure context for only the states and functions needed
  const { isSignedIn, handleLogOut } = useContext(Context);

  return (
    <Box className={classes.navBar}>
      <AppBar position="static">
        <Toolbar className={classes.navButtons}>
          <div className={classes.navOptions}>
            <RocketIcon sx={{ fontSize: 48, paddingRight: 10 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, paddingRight: 10 }}
            >
              News
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, paddingRight: 10 }}
            >
              Features
            </Typography>
            {/* Dynamicaly render nav bar content based on isSignedIn state from context */}
            {isSignedIn && (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, paddingRight: 10 }}
              >
                User Settings
              </Typography>
            )}
          </div>
          {/* Dynamicaly render nav bar content based on isSignedIn state from context */}
          {isSignedIn && (
            <Button onClick={() => handleLogOut()} color="inherit">
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
