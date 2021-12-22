import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RocketIcon from "@mui/icons-material/Rocket";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Context } from "../context/ExampleContext";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    width: "100%",
    height: "100",
    display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   backgroundColor: "red",
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
  const classes = useStyles();

  const { isSignedIn, setIsSignedIn, handleLogOut } = useContext(Context);

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
