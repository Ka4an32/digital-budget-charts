import React from "react";

import "./style/css/nullable.css";
import "./style/css/fonts.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import DataService from "./services/DataService/DataService";
import ThemeColorService from "./services/ColorThemeService/ColorThemeService";

export type selectionRange = Array<{
  startDate: Date;
  endDate: Date;
  key: string;
}>;

function App() {
  return (
    <div className="App">
      <ThemeColorService>
        <DataService>
          <div>ChartsJS</div>
        </DataService>
      </ThemeColorService>
    </div>
  );
}

export default App;
