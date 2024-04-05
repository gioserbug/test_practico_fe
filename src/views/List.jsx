import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/items.services";
import Skeleton from "react-loading-skeleton";
import Card from "../components/Card";
import { BreadcrumbList } from "../components/Breadcrumb";
import { useEffect } from "react";

const List = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  if (!search) {
    return null;
  }

  const { data, isFetching } = useQuery({
    queryKey: ["items", search],
    queryFn: () => getItems(search),
  });

  useEffect(() => {
    localStorage.setItem("search", search);
    localStorage.setItem("categoryItem", data?.categories?.[0].name);
  }, [search, data?.categories]);

  return (
    <>
      <BreadcrumbList categories={data?.categories} />
      <div className="list">
        {isFetching ? (
          <Skeleton height={180} count={4} style={{ marginBottom: "5px" }} />
        ) : data?.items?.length > 0 ? (
          data.items
            ?.slice(0, 4)
            .map((item, index) => <Card key={index} item={item} />)
        ) : (
          <h4 style={{ textAlign: "center" }}>
            No hay publicaciones que coincidan con tu búsqueda.
          </h4>
        )}
      </div>
    </>
  );
};

export default List;
