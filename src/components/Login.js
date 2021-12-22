import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

import { Context } from "../context/ExampleContext";

const useStyles = makeStyles({
  login: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    width: 300,
  },
  spacer: {
    height: 15,
  },
});

export const Login = () => {
  const classes = useStyles();

  const {
    isSignedIn,
    setIsSignedIn,
    userName,
    setUserName,
    password,
    setPassword,
    handleLogIn,
  } = useContext(Context);

  return (
    <div>
      {!isSignedIn && (
        <div className={classes.login}>
          <TextField
            className={classes.textField}
            id="userName_field"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            placeholder="User Name"
          />
          <div className={classes.spacer}></div>
          <TextField
            className={classes.textField}
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            placeholder="Password"
            type="password"
          />
          <div className={classes.spacer}></div>
          <Button variant="contained" onClick={() => handleLogIn()}>
            Log In
          </Button>
        </div>
      )}
    </div>
  );
};
