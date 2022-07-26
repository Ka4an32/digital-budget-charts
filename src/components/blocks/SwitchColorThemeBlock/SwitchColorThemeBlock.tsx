import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../../services/ColorThemeService/ColorThemeService";

import color from "../../../color";

const SwithColorThemeBlock = () => {
  const colorTheme = useContext(ColorModeContext);
  const selectChangeHandle = (event: SelectChangeEvent) => {
    colorTheme.changeColorMode(event.target.value as keyof typeof color);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Цветовая схема</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={colorTheme.colorMode}
          onChange={selectChangeHandle}
          label="Цветовая схема"
          sx={{
            minWidth: 150
          }}
        >
          {Object.keys(color).map((themeName) => (
            <MenuItem value={themeName}>{themeName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SwithColorThemeBlock;
