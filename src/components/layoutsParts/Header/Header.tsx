import { Paper, Switch } from "@mui/material";
import React from "react";
import PickerBlock from "../../blocks/PickerBlock/PickerBlock";
import SwithThemeBlock from "../../blocks/SwitchThemeBlock/SwithThemeBlock";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <Paper className="header">
      <PickerBlock />
      <SwithThemeBlock />
    </Paper>
  );
};

export default Header;
