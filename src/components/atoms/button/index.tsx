import { Button } from "@mui/material";
import React from "react";

interface ButtonProp {
  label: string;
}

const ButtonComp = ({ label }: ButtonProp) => {
  return (
    <Button variant="contained" color="primary">
      {label}
    </Button>
  );
};

export default ButtonComp;
