import "./App.css";

import { Home } from "./components/Home";
//Import Context Provider from Context file
import { ExampleProvider } from "./context/ExampleContext";

function App() {
  return (
    // Wrap Home component in Context Provider to pass exported states and functions
    <ExampleProvider>
      <Home />
    </ExampleProvider>
  );
}

export default App;
