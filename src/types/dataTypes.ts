export type IntstrumentalType = {
  budget: number;
  corr_budget: number;
  kind: string;
  type: "desktop" | "mobile";
  visits: number;
};

export type DifferentData = {
  [key: string]: {
    label: string;
    data: IntstrumentalType[];
  };
};

export type PrimaryDataType = {
  site: string;
  category: string;
  days: DifferentData;
};
