import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image_logo_ml from "../assets/Logo_ML.png";
import image_search from "../assets/ic_Search.png";

const Header = () => {
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

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searched) {
      navigate(`/items?search=${searched}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="header-stack">
        <div>
          <img
            className="image-logo"
            src={image_logo_ml}
            alt="image logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div style={{ display: "inline-flex" }}>
          <input
            className="input-search"
            placeholder="Nunca dejes de buscar"
            value={searched}
            onChange={(event) => setSearched(event.target.value)}
          />

          <button className="btn-search" type="submit">
            <img className="image-logo" src={image_search} alt="image search" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Header;
