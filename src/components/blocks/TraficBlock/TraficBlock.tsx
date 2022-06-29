import { Grid, Card } from "@mui/material";
import React from "react";
import InstrumentalTrafic from "../../charts/Trafic/InstrumentalTrafic/InstrumentalTrafic";
import PlatformTrafic from "../../charts/Trafic/PlatformTrafic/PlatformTrafic";
import ResourceChartsBlock from "../ResourceChartsBlock/ResourceChartsBlock";

const TraficBlock: React.FC = () => {
  return (
    <ResourceChartsBlock>
      <Grid item xs={12}>
        <Card sx={{ padding: "20px" }}>
          <PlatformTrafic />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: "20px" }}>
          <InstrumentalTrafic />
        </Card>
      </Grid>
    </ResourceChartsBlock>
  );
};

export default TraficBlock;
