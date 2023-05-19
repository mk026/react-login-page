import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import classes from "./PageTitle.module.css";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h2" className={classes.title}>
      {children}
    </Typography>
  );
};

export default PageTitle;
