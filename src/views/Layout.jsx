import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [searched, setSearched] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      setSearched(search);
    } else {
      setSearched("");
    }
  }, [search]);

  return (
    <>
      <div className="container-items searcher">
        <div className="item">
          <input
            placeholder="Buscar"
            value={searched}
            onChange={(event) => setSearched(event.target.value)}
          />
          <Link to={searched ? `/items?search=${searched}` : ""}>Buscar</Link>
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
