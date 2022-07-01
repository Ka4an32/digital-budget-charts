import { Grid, Card } from "@mui/material";
import React from "react";
import MixedResource from "../../charts/Mixed/MixedResource";
import ResourceChartsBlock from "../ResourceChartsBlock/ResourceChartsBlock";

const MixedBlock: React.FC = () => {
  return (
    <ResourceChartsBlock blockName="Бюджет и трафик">
      <Grid item xs={12}>
        <Card sx={{ padding: "20px" }}>
          <MixedResource />
        </Card>
      </Grid>
    </ResourceChartsBlock>
  );
};

export default MixedBlock;
