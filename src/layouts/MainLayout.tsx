import { Box } from "@mui/material";
import React from "react";
import ExpensBlock from "../components/blocks/ExpensBlock/ExpensBlock";
import MixedBlock from "../components/blocks/MixedBlock/MixedBlock";
import PickerBlock from "../components/blocks/PickerBlock/PickerBlock";
import TraficBlock from "../components/blocks/TraficBlock/TraficBlock";
import Header from "../components/layoutsParts/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <Box>
      <Header />
      <div className="content" style={{ padding: "20px", marginTop: 60 }}>
        <ExpensBlock />
        <MixedBlock />
        <TraficBlock />
      </div>
    </Box>
  );
};

export default MainLayout;
