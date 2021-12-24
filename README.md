# Context example with login state and api call

This project is to illustrate the basic structure and use of useContext in a React app. It is designed specifically for a friend that is currently learning React.js

## Warning

This project uses https://www.foaas.com/ for api calls. This api uses vulgar language and is not to be taken seriously or as a direct comment to the user.

## Installation

Fork and clone repo to a local directory.

Open in VS Code or text editor of your choice.

### `yarn`

Run through VS Code terminal or Node.js terminal in project root directory.
Installs all needed dependencies for the app.

## Running the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You can view the current states in the component developer tools:
![developer tools](/src/context.JPG)

## Breakdown of how it works

## Context file setup

```
src/context/ExampleContext.js
```

Import React and createContext at the top.
Also import any other hooks you plan to use.

```
import React, { createContext, useState, useEffect } from "react";
```

Create and Export the Context variable

```
export const Context = createContext();
```

Create the Context Provider
Export your named Context Provided component.
Pass {children} as the props. This prop will be any compontent that is later wrapped in the provider and calls the context.
Create any useStates, variables, or functions that you want to pass to other components.
Create a variable called 'value' set it to a destructured list of any states, variables, or functions you want to export.
Finally return a JSX component for your Context Provided. Pass value as a prop. And the children prop in the content.

```
export const ExampleProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [randomNumber, setRandomNumber] = useState(null);
    const [userName, setUserName] = useState("");

    const handleLogIn = () => {
        if (userName) {
            setIsSignedIn(true);
            setRandomNumber(Math.floor(Math.random() * 4) + 1);
        } else {
            alert("Please enter a username and password");
        }
    };

    useEffect(() => {
        if (randomNumber === 2) {
            setIsSignedIn(false);
        }
    }, [randomNumber]);

    value = {
        isSignedIn,
        setIsSignedIn,
        randomNumber,
        setRandomNumber,
        userName,
        setUserName,
        handleLogIn,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
```

## Provider setup

src/App.js

Import the ContextProvider into the component you want to wrap with it.

```
import { ExampleProvider } from "./context/ExampleContext";
```

Inside the return, wrap the component with the provider. Now this component and all component inside of it will have access to the context.

```
function App() {
    return (
        <ExampleProvider>
            <Home />
        </ExampleProvider>
    );
}
```

## Calling context

src/components/Login.js
src/components/NavBar.js
src/components/FeaturePage.js

Import React and useContext at the top.

```
import React, { useContext } from "react";
```

Import the context file you created previously

```
import { Context } from "../context/ExampleContext";
```

Inside your component, call useContext with your context name and destructure the states, variables, or functions you wish to import.

```
  const {
    isSignedIn,
    userName,
    setUserName,
    handleLogIn,
  } = useContext(Context);
```

These are now available anwhere within your component and can be called normally in JSX.

```
    setUserName("Nick");
    onClick={() => (isSignedIn ? handleLogOut() : handleLogIn())}
```
