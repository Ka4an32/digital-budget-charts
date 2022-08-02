import { DifferentData, IntstrumentalType } from "../../types/dataTypes";

const splitterCore = (
  data: IntstrumentalType[],
  reduce: DifferentData,
  key: string,
  label: string
) => {
  if (reduce[key]) {
    data.forEach(({ visits, budget, ...item }) => {
      const index = reduce[key].data.findIndex(
        (itemData) => itemData.kind === item.kind && itemData.type === item.type
      );
      if (index >= 0) {
        reduce[key].data[index].budget += budget;
        reduce[key].data[index].visits += visits;
      } else {
        reduce[key].data.push({
          visits,
          budget,
          ...item,
        });
      }
    });
  } else {
    reduce[key] = {
      label,
      data: [...data],
    };
  }
  return reduce;
};

export default splitterCore;
