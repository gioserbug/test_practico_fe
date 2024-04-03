import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "../services/items.services";

const Detail = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItem(id),
  });

  return <div>{isFetching ? "loading" : data?.item?.title}</div>;
};

export default Detail;
