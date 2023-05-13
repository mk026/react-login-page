import { FC } from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../../routes";

const AuthLinks: FC = () => {
  return (
    <div>
      <Link to={Paths.AUTH}>Login</Link>
      <Link to={Paths.AUTH}>Register</Link>
    </div>
  );
};

export default AuthLinks;
