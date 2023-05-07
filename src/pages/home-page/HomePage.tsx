import { FC } from "react";

import PageTitle from "../../components/page-title";
import AppInfo from "../../components/app-info";

const HomePage: FC = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <AppInfo />
    </>
  );
};

export default HomePage;
