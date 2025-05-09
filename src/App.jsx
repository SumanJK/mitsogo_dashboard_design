import { Box } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  console.log("new");
  return (
    <Box className="App">
      <Dashboard />
    </Box>
  );
}

export default App;
