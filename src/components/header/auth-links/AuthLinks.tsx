import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../../routes";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row">
      <Button variant="outlined" component={Link} to={Paths.AUTH}>
        Register
      </Button>
      <Button variant="contained" component={Link} to={Paths.AUTH}>
        Login
      </Button>
    </Stack>
  );
};

export default AuthLinks;
