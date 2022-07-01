import { resourceType } from "./../../types/dataTypes";
import { splitDataType } from "../../types/splitDataType";

const getAllResources = (data: splitDataType, resource: resourceType) => {
  const periodData = data.YEAR;
  const resources = {
    all: 0,
    desktop: 0,
    mobile: 0,
  };

  let resourceData;

  for (let key in periodData) {
    resourceData = periodData[key].data.reduce((acc, item) => {
      let all = 0;
      let desktop = 0;
      let mobile = 0;
      if (item.type === "mobile") {
        mobile += +item[resource];
      }
      if (item.type === "desktop") {
        desktop += +item[resource];
      }

      all += +item[resource];

      return {
        all: acc.all + all,
        desktop: acc.desktop + desktop,
        mobile: acc.mobile + mobile,
      };
    }, resources);
  }

  return resourceData;
};

export default getAllResources;
