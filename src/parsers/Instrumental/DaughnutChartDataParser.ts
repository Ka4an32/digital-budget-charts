import { monthType } from "../../data/data";

const parsedate = (months: Array<monthType>) => {
  let InstrumentalBudget: {
    [key: string]: {
      mobile: number;
      desktop: number;
    };
  } = {};

  months.forEach(({ data }) => {
    data.forEach(({ kind, type, budget }) => {
      if (!InstrumentalBudget[kind]) {
        InstrumentalBudget[kind] = {
          desktop: 0,
          mobile: 0,
        };
      }
      InstrumentalBudget[kind][type] += budget;
    });
  });

  return InstrumentalBudget;
};

const summInstrumentalBudget = (
  IB: ReturnType<typeof parsedate>,
  platform?: "desktop" | "mobile"
) => {
  let AllInstrumentalBudget: {
    [key: string]: number;
  } = {};

  if (platform) {
    for (let key in IB) {
      AllInstrumentalBudget[key] = IB[key][platform];
    }
  } else {
    for (let key in IB) {
      AllInstrumentalBudget[key] = IB[key].desktop + IB[key].mobile;
    }
  }

  const labels = [];
  const data = [];

  for (let key in AllInstrumentalBudget) {
    labels.push(key);
    data.push(AllInstrumentalBudget[key]);
  }

  return {
    labels,
    data,
  };
};

const DaughnutChartDataParser = (months: Array<monthType>) => {
  const InstrumentalBudget = parsedate(months);
  const ConfigAllData = summInstrumentalBudget(InstrumentalBudget);
  const ConfigMobileData = summInstrumentalBudget(InstrumentalBudget, "mobile");
  const ConfigDesktopData = summInstrumentalBudget(
    InstrumentalBudget,
    "desktop"
  );

  return {
    ConfigDesktopData,
    ConfigMobileData,
    ConfigAllData,
  };
};

export default DaughnutChartDataParser;
