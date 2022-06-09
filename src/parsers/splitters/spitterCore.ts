import { DifferentData, IntstrumentalType } from "../../types/dataTypes";

const splitterCore = (
  data: IntstrumentalType[],
  reduce: DifferentData,
  key: string,
  label: string
) => {
  if (reduce[key]) {
    reduce[key].data.map(({ kind, type }, index) => {
      data.forEach(({ visits, budget, ...item }) => {
        if (item.kind === kind && item.type === type) {
          reduce[key].data[index].budget += budget;
          reduce[key].data[index].visits += visits;
        }
      });
    });
  } else {
    reduce[key] = {
      label,
      data,
    };
  }
  return reduce;
};

export default splitterCore;
