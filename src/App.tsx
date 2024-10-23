import "./App.css";
import { MantineProvider } from "@mantine/core";

import HomePage from "./component/HomePage";
function App() {
  return (
    <>
      <MantineProvider>
        <HomePage />
      </MantineProvider>
    </>
  );
}

export default App;
