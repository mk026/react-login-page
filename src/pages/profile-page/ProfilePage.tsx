import { FC } from "react";

import PageTitle from "../../components/page-title";
import Profile from "../../components/profile";

const ProfilePage: FC = () => {
  return (
    <>
      <PageTitle>Profile</PageTitle>
      <Profile />
    </>
  );
};

export default ProfilePage;
