import { Grid, Card } from "@mui/material";
import React from "react";
import PlatformExpens from "../../charts/Expens/PlatformExpens/PlatformExpens";
import ResourceChartsBlock from "../ResourceChartsBlock/ResourceChartsBlock";

const ExpensBlock: React.FC = () => {
  return (
    <ResourceChartsBlock>
      <Grid item xs={12}>
        <Card sx={{ padding: "20px" }}>
          <PlatformExpens />
        </Card>
      </Grid>
    </ResourceChartsBlock>
  );
};

export default ExpensBlock;
