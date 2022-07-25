import { Paper, Switch } from "@mui/material";
import React from "react";
import PickerBlock from "../../blocks/PickerBlock/PickerBlock";
import SwitchColorThemeBlock from "../../blocks/SwitchColorThemeBlock/SwitchColorThemeBlock";
import SwitchThemeBlock from "../../blocks/SwitchThemeBlock/SwitchThemeBlock";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <Paper className="header">
      <PickerBlock />
      <div className="color-theme-block">
        <SwitchColorThemeBlock />
        <div style={{width: 30}}/>
        <SwitchThemeBlock />
      </div>
    </Paper>
  );
};

export default Header;
