import React, { PropsWithChildren, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import color from "../../color";

const ColorModeContext = React.createContext({
  mode: "light",
  colorMode: localStorage.getItem('colorMode') ?? 'Sunset',
  toggleColorMode: () => {},
  changeColorMode: (colorMode: colorCollectionType) => {},
});

type colorCollectionType = keyof typeof color;

const ToggleColorMode: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [colorMode, setColorMode] = useState<colorCollectionType>(localStorage.getItem('colorMode') as colorCollectionType ?? 'Sunset');

  const colorModeInstance = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      changeColorMode: (colorMode: colorCollectionType) => {
        setColorMode(colorMode);
        localStorage.setItem('colorMode', colorMode)
      },
      colorMode: colorMode,
      mode: mode,
    }),
    [mode, colorMode]
  );

  const theme = React.useMemo(() => {
    const palette: any = {
      palette: {
        mode,
        budget: {
          light: color[colorMode][0],
        },
        trafic: {
          light: color[colorMode][2],
        },
        totalExpens: {
          light: color[colorMode][0],
        },
        desktopExpens: {
          light: color[colorMode][1],
        },
        mobileExpens: {
          light: color[colorMode][2],
        },
        Direct: {
          light: color[colorMode][3],
        },
        ["e-mail Marketing (CRM)"]: {
          light: color[colorMode][4],
        },
        ["Online Video (In-Stream)"]: {
          light: color[colorMode][5],
        },
        ["Organic Search"]: {
          light: color[colorMode][6],
        },
        ["Paid Search"]: {
          light: color[colorMode][7],
        },
        ["Paid Social"]: {
          light: color[colorMode][8],
        },
        Programmatic: {
          light: color[colorMode][9],
        },
        ["Display Ad"]: {
          light: color[colorMode][10],
        },
      },
    };
    return createTheme(palette);
  }, [mode, colorMode]);

  return (
    <ColorModeContext.Provider value={colorModeInstance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext };
export default ToggleColorMode;
