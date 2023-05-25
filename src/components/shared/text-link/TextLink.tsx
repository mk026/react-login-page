import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { Typography } from "@mui/material";

import classes from "./TextLink.module.css";

const TextLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="inherit"
      component={Link}
      className={classes.link}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default TextLink;
