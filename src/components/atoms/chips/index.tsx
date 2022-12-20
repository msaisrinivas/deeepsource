import React from "react";
import { Chip } from "@mui/material";

interface ChipProps {
  label: string;
}

const Chips = ({ label }: ChipProps) => {
  return (
    <Chip
      label={label}
      color="success"
      sx={{
        width: "10%",
        fontSize: "2rem",
      }}
      data-testid="custom-chips"
    />
  );
};

export default Chips;
