import { api } from "./api";

const baseEndpoint = "api/items";

export const getItems = async (search) => {
  try {
    const response = await api.get(`${baseEndpoint}?q=${search}`);
    return response.data || {};
  } catch (error) {
    console.log(error?.response?.data?.message || error.message);
    return {};
  }
};

export const getItem = async (id) => {
  try {
    const response = await api.get(`${baseEndpoint}/${id}`);
    return response.data || {};
  } catch (error) {
    console.log(error?.response?.data?.message || error.message);
    return {};
  }
};
