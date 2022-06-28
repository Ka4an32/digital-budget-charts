import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "rsuite/DateRangePicker";
import parseDataActions from "../../../store/redux/actions/parseDataActions/parseDataActions";
import { AppThunkDispatch, RootReducer } from "../../../store/redux/store";
import { dateModeType } from "../../../types/splitDataType";

const PickerBlock: React.FC = () => {
  const [period, setPeriod] = useState<[Date, Date] | null>(null);

  const { splitData, dateMode } = useSelector((state: RootReducer) => ({
    splitData: state.SplitDataReducer.splitData,
    dateMode: state.ParseDataReducer.dateMode,
  }));
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(
      parseDataActions.ParseDataThunks.filterDatePeriodModeData(
        splitData,
        period,
        dateMode
      )
    );
  }, [period]);

  const handleAlignment = useCallback(
    (e: React.MouseEvent<HTMLElement>, mode: dateModeType) => {
      dispatch(
        parseDataActions.ParseDataThunks.filterDatePeriodModeData(
          splitData,
          period,
          mode
        )
      );
    },
    [period, splitData]
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <DateRangePicker value={period} onChange={setPeriod} />
      </div>
      <div style={{ marginLeft: 30 }}>
        <ToggleButtonGroup
          value={dateMode}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="DAY" aria-label="left aligned">
            День
          </ToggleButton>
          <ToggleButton value="WEEKLY" aria-label="centered">
            Неделя
          </ToggleButton>
          <ToggleButton value="MONTH" aria-label="right aligned">
            Месяц
          </ToggleButton>
          <ToggleButton value="YEAR" aria-label="justified">
            Год
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default PickerBlock;
