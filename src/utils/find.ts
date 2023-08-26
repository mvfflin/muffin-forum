import { axiosInstance } from "./axios";

export const find = async (id: number | string) => {
  const response = await axiosInstance.get(`/api/users/user`, {
    params: {
      id: id,
    },
  });
  const data = await response.data();
  return data;
};
