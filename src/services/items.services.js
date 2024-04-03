import { api } from "./api";
import { toast } from "sonner";

const baseEndpoint = "api/items";

export const getItems = async (search) => {
  try {
    const response = await api.get(`${baseEndpoint}?q=${search}`);
    return response.data || {};
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    return {};
  }
};

export const getItem = async (id) => {
  try {
    const response = await api.get(`${baseEndpoint}/${id}`);
    return response.data || {};
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    return {};
  }
};
