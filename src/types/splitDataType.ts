import { DifferentData } from "./dataTypes";

export type dateModeType = "DAY" | "WEEKLY" | "MONTH" | "YEAR";
export type siteDataType = {
  site: string;
  category: string;
};
export type metaSplitData = {
  isDateSplitting: boolean;
};
export type splitDataType = {
  [key in dateModeType]: DifferentData;
};
