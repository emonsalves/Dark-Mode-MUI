/* eslint-disable react-refresh/only-export-components */
import React, { lazy, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "./theme/customTheme";
import { ColorModeContext } from "./context/contextTheme";
import CssBaseline from "@mui/material/CssBaseline";

const App = lazy(() => import("./App"));

import "./index.css";

function Main() {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme(customTheme(mode));

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
