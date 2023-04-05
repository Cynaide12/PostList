import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../Context";
const AppRouter = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  return !isAuth ? 
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
   : 
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/pages" replace />} />
    </Routes>
  
};
export default AppRouter;
