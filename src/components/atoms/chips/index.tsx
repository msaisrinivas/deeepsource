import React from "react";
import { Chip } from "@mui/material";

const Chips = () => {
  return (
    <Chip
      label="Hello"
      color="success"
      sx={{
        width: "10%",
        fontSize: "2rem",
      }}
    />
  );
};

export default Chips;
