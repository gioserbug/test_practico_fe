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
    }
  }, [search]);

  return (
    <>
      <input
        placeholder="Buscar"
        value={searched}
        onChange={(event) => setSearched(event.target.value)}
      />
      <Link to={searched ? `/items?search=${searched}` : ""}>Buscar</Link>

      <Outlet />
    </>
  );
};

export default Layout;
