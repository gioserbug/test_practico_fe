import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/items.services";
import Skeleton from "react-loading-skeleton";
import Card from "../components/Card";

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

  return (
    <div className="list">
      {isFetching ? (
        <Skeleton height={160} count={4} style={{ marginBottom: "5px" }} />
      ) : (
        data?.items
          ?.slice(0, 4)
          .map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
};

export default List;
