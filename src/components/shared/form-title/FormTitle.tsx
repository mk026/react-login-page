import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

import classes from "./FormTitle.module.css";

const FormTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Typography className={classes.title}>{children}</Typography>;
};

export default FormTitle;
