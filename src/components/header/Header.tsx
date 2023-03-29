import { FC } from "react";

import AppTitle from "./app-title";
import AuthLinks from "./auth-links";

const Header: FC = () => {
  return (
    <div>
      <AppTitle />
      <AuthLinks />
    </div>
  );
};

export default Header;
