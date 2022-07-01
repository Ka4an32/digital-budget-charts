export type IntstrumentalType = {
  budget: number;
  corr_budget: number;
  kind: string;
  type: "desktop" | "mobile";
  visits: number;
};

export type PeriodType = [Date, Date] | null;

export type PeriodData = {
  label: string;
  data: IntstrumentalType[];
};

export type DifferentData = {
  [key: string]: PeriodData;
};

export type PrimaryDataType = {
  site: string;
  category: string;
  days: DifferentData;
};

export type resourceType = keyof IntstrumentalType;

export type ResourceDataType = {
  all: number;
  desktop: number;
  mobile: number;
};
export type ResourceSummType = {
  trafic: ResourceDataType;
  budget: ResourceDataType;
};
