import "./App.css";
import { MantineProvider } from "@mantine/core";

import HomePage from "./component/Homepage";
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
