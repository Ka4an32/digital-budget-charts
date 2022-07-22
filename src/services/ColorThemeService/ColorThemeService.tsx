import React, { PropsWithChildren, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";

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
    () => {
      const palette: any = {
        palette: {
          mode,
          totalExpens: {
            light: yellow[500]
          },
          desktopExpens: {
            light: yellow[800]
          },
          mobileExpens: {
            light: red[300]
          },
          Direct: {
            light: blue[300]
          },
          ['e-mail Marketing (CRM)']: {
            light: blue[700]
          },
          ['Online Video (In-Stream)']: {
            light: red[300]
          },
          ['Organic Search']: {
            light: red[500]
          },
          ['Paid Search']: {
            light: red[800]
          },
          ['Paid Social']: {
            light: green[300]
          },
          Programmatic: {
            light: green[500]
          },
          ['Display Ad']: {
            light: green[800]
          }
        },
      }
      return createTheme(palette)
    },
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
