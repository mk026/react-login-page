import { Card, Typography } from "@mui/material";
import { FC } from "react";

import classes from "./AppInfo.module.css";

const AppInfo: FC = () => {
  return (
    <Card className={classes.info}>
      <Typography className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum
        dolores officiis fugit fuga optio excepturi vel, quo incidunt assumenda
        dolore delectus ex? Pariatur mollitia possimus sint nihil aliquid
        laudantium.
      </Typography>
    </Card>
  );
};

export default AppInfo;
