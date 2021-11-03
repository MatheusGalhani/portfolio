import React from "react";
import Home from "./pages/public/home/home";
import { ThemeProvider } from "./theme/context/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
