import { Typography } from "@mui/material";
import { FC } from "react";

import classes from "./AppTitle.module.css";

const AppTitle: FC = () => {
  return (
    <Typography variant="h1" className={classes.title}>
      React Login
    </Typography>
  );
};

export default AppTitle;
