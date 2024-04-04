import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <div className="container-items searcher">
        <div className="item">
          <Header />
        </div>
      </div>

      <div className="container-items">
        <div className="item">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
