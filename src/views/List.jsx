import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/items.services";

const List = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  if (!search) {
    return <div>Empty</div>;
  }

  const { data, isFetching } = useQuery({
    queryKey: ["items", search],
    queryFn: () => getItems(search),
  });

  return <div>{isFetching ? "loading" : data?.name}</div>;
};

export default List;
