import { Box } from "@mui/material";
import React from "react";
import ExpensBlock from "../components/blocks/ExpensBlock/ExpensBlock";
import MixedBlock from "../components/blocks/MixedBlock/MixedBlock";
import PickerBlock from "../components/blocks/PickerBlock/PickerBlock";
import TraficBlock from "../components/blocks/TraficBlock/TraficBlock";

const MainLayout: React.FC = () => {
  return (
    <Box>
      <div>ChartsJS</div>
      <div className="content" style={{ padding: "20px" }}>
        <div className="picker" style={{ marginBottom: 10 }}>
          <PickerBlock />
        </div>
        <ExpensBlock />
        <MixedBlock />
        <TraficBlock />
      </div>
    </Box>
  );
};

export default MainLayout;
