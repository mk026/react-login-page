import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { protectedRoutes, publicRoutes } from "../../../routes";
import AuthWrapper from "../auth-wrapper";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route element={<AuthWrapper />}>
        {protectedRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
