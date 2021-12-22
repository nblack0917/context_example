import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const ExampleProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [needsName, setNeedsName] = useState(false);
  const [needsFrom, setNeedsFrom] = useState(false);
  const [needsThing, setNeedsThing] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [thing, setThing] = useState("");
  const [foaas, setFoaas] = useState(null);

  const baseUrl = "https://www.foaas.com/";

  const handleRandomNumber = () => {
    switch (randomNumber) {
      case 1:
        setNeedsFrom(true);
        break;
      case 2:
        setNeedsName(true);
        setNeedsFrom(true);
        break;
      case 3:
        setNeedsFrom(true);
        setNeedsThing(true);
        break;
      default:
        break;
    }
  };

  const handleFOAAS = async () => {
    let urlParams;
    switch (randomNumber) {
      case 1:
        urlParams = `cup/${from}`;
        break;
      case 2:
        urlParams = `rockstar/${name}/${from}`;
        break;
      case 3:
        urlParams = `particular/${thing}/${from}`;
        break;
      default:
        urlParams = `awesome/Nick`;
        break;
    }

    if (urlParams) {
      console.log("click");
      await axios.get(baseUrl + urlParams).then((response) => {
        console.log(response.data);
        setFoaas(response.data);
      });
    }
  };

  const handleLogIn = () => {
    if (userName && password) {
      setIsSignedIn(true);
      setRandomNumber(Math.floor(Math.random() * 3) + 1);
    } else {
      alert("Please enter any username and password");
    }
  };

  const handleLogOut = () => {
    setIsSignedIn(false);
    setUserName("");
    setPassword("");
    setRandomNumber(null);
    setName("");
    setThing("");
    setFrom("");
    setNeedsThing(false);
    setNeedsName(false);
    setNeedsFrom(false);
    setFoaas(null);
  };

  useEffect(() => {
    if (randomNumber) {
      handleRandomNumber();
    }
  }, [randomNumber]);

  const value = {
    isSignedIn,
    setIsSignedIn,
    userName,
    setUserName,
    password,
    setPassword,
    handleLogIn,
    handleLogOut,
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
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
