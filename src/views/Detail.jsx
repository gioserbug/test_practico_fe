import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "../services/items.services";
import Skeleton from "react-loading-skeleton";
import LayoutDetail from "../components/LayoutDetail";
import { BreadcrumbDetail } from "../components/Breadcrumb";

const Detail = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItem(id),
  });

  return (
    <>
      <BreadcrumbDetail />
      {isFetching ? (
        <Skeleton height="100vh" />
      ) : (
        <LayoutDetail item={data?.item} />
      )}
    </>
  );
};

export default Detail;
