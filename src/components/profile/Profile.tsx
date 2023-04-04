import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { useAuth } from "../../hooks/useAuth";

const Profile: FC = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Typography>{user?.name}</Typography>
      <Typography>{user?.bio}</Typography>
    </Box>
  );
};

export default Profile;
