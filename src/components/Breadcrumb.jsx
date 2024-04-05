import { Link } from "react-router-dom";

export const BreadcrumbList = ({ categories }) => {
  if (categories?.length === 0) return null;

  return (
    <div className="breadcrumb">
      {categories?.[0].path_from_root?.length > 0 &&
        categories[0].path_from_root.map((category, index) => (
          <Link key={index} to={`/items?search=${category.name}`}>
            {category.name}
          </Link>
        ))}
    </div>
  );
};

export const BreadcrumbDetail = () => {
  const searchedFromStorage = localStorage.getItem("search");
  const categoryItemFromStorage = localStorage.getItem("categoryItem");

  if (!searchedFromStorage) {
    return null;
  }

  return (
    <div className="breadcrumb">
      <Link to={`/items?search=${searchedFromStorage}`}>Volver al listado</Link>
      <Link>
        {categoryItemFromStorage === "undefined" ? "" : categoryItemFromStorage}
      </Link>
    </div>
  );
};
