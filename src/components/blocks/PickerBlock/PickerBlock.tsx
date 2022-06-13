import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "rsuite/DateRangePicker";
import parseDataActions from "../../../store/redux/actions/parseDataActions/parseDataActions";
import { AppThunkDispatch, RootReducer } from "../../../store/redux/store";

const PickerBlock: React.FC = () => {
  const [period, setPeriod] = useState<[Date, Date] | null>(null);

  const { splitData } = useSelector((state: RootReducer) => ({
    splitData: state.SplitDataReducer.splitData,
  }));
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(
      parseDataActions.ParseDataThunks.filterDatePeriodModeData(
        splitData,
        period,
        "DAY"
      )
    );
  }, [period]);

  return (
    <div>
      <DateRangePicker value={period} onChange={setPeriod} />
    </div>
  );
};

export default PickerBlock;
