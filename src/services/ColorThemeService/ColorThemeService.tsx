import React, { PropsWithChildren, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

const ToggleColorMode: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode: mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext };
export default ToggleColorMode;
