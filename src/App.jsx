import React from "react";
import { Box, IconButton } from "@mui/material";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./context/contextTheme";

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // Define accessible names for the buttons
  const lightModeLabel = "Switch to Light Mode";
  const darkModeLabel = "Switch to Dark Mode";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        This is a {theme.palette.mode} mode theme with custom palette
        <>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
            className="button_darkmode"
            id="button_darkmode"
            aria-label={
              theme.palette.mode === "dark" ? lightModeLabel : darkModeLabel
            }
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </>
      </Box>
    </>
  );
}

export default App;
