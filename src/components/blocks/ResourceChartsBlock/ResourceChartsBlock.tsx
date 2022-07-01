import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ResourceChartsBlock: React.FC<PropsWithChildren<{
  blockName: string
}>> = ({ children, blockName }) => {
  return (
    <Grid container rowSpacing={2} spacing={2} sx={{margin: '15px 0'}}>
      <h2 style={{margin: '0 auto'}}>{blockName}</h2>
      {children}
    </Grid>
  );
};

export default ResourceChartsBlock;
