import { FC } from "react";
import { AppBar } from "@mui/material";

import AppTitle from "./app-title";
import AuthLinks from "./auth-links";

import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <AppBar className={classes.header}>
      <AppTitle />
      <AuthLinks />
    </AppBar>
  );
};

export default Header;
