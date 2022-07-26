import { dayType } from "../../data/data";
import { IntstrumentalType, PeriodData } from "../../types/dataTypes";

type resourceType = keyof IntstrumentalType;

const parsedate = (months: PeriodData[], resource: resourceType) => {
  let InstrumentalBudget: {
    [key: string]: {
      mobile: number;
      desktop: number;
    };
  } = {};

  months.forEach(({ data }) => {
    data.forEach((item) => {
      const { kind, type } = item;
      if (!InstrumentalBudget[kind]) {
        InstrumentalBudget[kind] = {
          desktop: 0,
          mobile: 0,
        };
      }
      InstrumentalBudget[kind][type] += Number(item[resource]);
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

  const labels: string[] = [];
  const data: number[] = [];

  const sortArray = Object.entries(AllInstrumentalBudget).sort(
    (a, b) => a[1] - b[1]
  );

  sortArray.forEach((item) => {
    labels.push(item[0]);
    data.push(item[1]);
  });

  return {
    labels,
    data,
  };
};

const ShareParser = (months: PeriodData[], resource: resourceType) => {
  const InstrumentalResource = parsedate(months, resource);
  const ConfigAllData = summInstrumentalBudget(InstrumentalResource);
  const ConfigMobileData = summInstrumentalBudget(
    InstrumentalResource,
    "mobile"
  );
  const ConfigDesktopData = summInstrumentalBudget(
    InstrumentalResource,
    "desktop"
  );

  return {
    ConfigDesktopData,
    ConfigMobileData,
    ConfigAllData,
  };
};

export default ShareParser;
