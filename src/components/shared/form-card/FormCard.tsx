import { FC, PropsWithChildren } from "react";
import { Card } from "@mui/material";

import classes from "./FormCard.module.css";

const FormCard: FC<PropsWithChildren> = ({ children }) => {
  return <Card className={classes.card}>{children}</Card>;
};

export default FormCard;
