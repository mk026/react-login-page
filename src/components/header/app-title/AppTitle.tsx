import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import { Paths } from "../../../routes";

import classes from "./AppTitle.module.css";

const AppTitle: FC = () => {
  return (
    <Typography
      variant="h1"
      className={classes.title}
      component={Link}
      to={Paths.HOME}
    >
      React Login
    </Typography>
  );
};

export default AppTitle;
