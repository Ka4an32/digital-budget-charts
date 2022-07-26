import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export interface InstrumentalTableInterface {
  ConfigAllData: {
    labels: string[];
    data: number[];
  };
  ConfigDesktopData: {
    labels: string[];
    data: number[];
  };
  ConfigMobileData: {
    labels: string[];
    data: number[];
  };
}

const parseNumb = (numb: number) => {
  return String(Math.floor(numb)).split("").reverse().join("").match(/.{1,3}/g)?.join(' ').split("").reverse().join("")
}

const createData = (
  label: string,
  all: number,
  desktop: number,
  mobile: number
) => {
  return {
    label,
    all: parseNumb(all),
    desktop: parseNumb(desktop),
    mobile: parseNumb(mobile),
  };
};

const InstrumentalTables: React.FC<InstrumentalTableInterface> = ({
  ConfigAllData,
  ConfigDesktopData,
  ConfigMobileData,
}) => {
  const labels = ConfigAllData.labels;

  const data = labels.map((item, index) => {
    return createData(item, ConfigAllData.data[index], ConfigDesktopData.data[index], ConfigMobileData.data[index])
  }).reverse()

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Инструмент</b></TableCell>
              <TableCell><b>Общий</b></TableCell>
              <TableCell><b>Десктоп</b></TableCell>
              <TableCell><b>Мобайл</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.label}>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.all}</TableCell>
                <TableCell>{row.desktop}</TableCell>
                <TableCell>{row.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InstrumentalTables;
