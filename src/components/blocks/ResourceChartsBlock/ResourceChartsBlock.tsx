import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ResourceChartsBlock: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Grid container rowSpacing={2} spacing={2}>
      {children}
    </Grid>
  );
};

export default ResourceChartsBlock;
