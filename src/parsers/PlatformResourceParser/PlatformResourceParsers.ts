import { dataType, dayType } from "../../data/data";
import { IntstrumentalType, PeriodData } from "../../types/dataTypes";

type resourceType = keyof IntstrumentalType;

const dataParser = (
  data: Array<dataType>,
  resource: resourceType,
  filter?: string
) => {
  if (filter) {
    const filterData = data.filter(({ type }) => type === filter);
    return filterData.reduce((sum, item) => sum + +item[resource], 0);
  }
  return data.reduce((sum, item) => sum + +item[resource], 0);
};

const PlatformResourceParser = (
  months: PeriodData[],
  resource: resourceType
) => {
  const labels = months.map(({ label }) => label);
  const AllResources = months.map(({ data }) => dataParser(data, resource));
  const MobileResources = months.map(({ data }) =>
    dataParser(data, resource, "mobile")
  );
  const DesktopResources = months.map(({ data }) =>
    dataParser(data, resource, "desktop")
  );

  const parseData = {
    labels,
    data: {
      AllResources,
      MobileResources,
      DesktopResources,
    },
  };
  return parseData;
};

export default PlatformResourceParser;
