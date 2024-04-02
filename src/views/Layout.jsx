import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <input placeholder="Buscar" />
      <Outlet />
    </>
  );
};

export default Layout;
