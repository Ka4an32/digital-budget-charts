import React, { useEffect } from "react";

import "./style/css/nullable.css";
import "rsuite/dist/rsuite.min.css";
import "./style/css/fonts.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import data from "./data/data";
import ThemeColorService from "./services/ColorThemeService/ColorThemeService";
import splitDataActions from "./store/redux/actions/splitDataActions/splitDataActions";
import { AppThunkDispatch } from "./store/redux/store";
import { useDispatch } from "react-redux";
import MainLayout from "./layouts/MainLayout";

export type selectionRange = Array<{
  startDate: Date;
  endDate: Date;
  key: string;
}>;

function App() {
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(splitDataActions.SplitDataThunks.splittingDate(data));
  }, []);

  return (
    <div className="App">
      <ThemeColorService>
        <MainLayout />
      </ThemeColorService>
    </div>
  );
}

export default App;
