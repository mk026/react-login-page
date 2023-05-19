import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../../routes";

import classes from "./AuthLinks.module.css";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row">
      <Button
        variant="outlined"
        className={classes["register-link"]}
        component={Link}
        to={Paths.AUTH}
      >
        Register
      </Button>
      <Button
        variant="contained"
        className={classes["login-link"]}
        component={Link}
        to={Paths.AUTH}
      >
        Login
      </Button>
    </Stack>
  );
};

export default AuthLinks;
