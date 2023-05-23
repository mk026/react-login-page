import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

import classes from "./FormInfo.module.css";

const FormInfo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="body2" className={classes.info}>
      {children}
    </Typography>
  );
};

export default FormInfo;
