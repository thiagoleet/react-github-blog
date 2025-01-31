import { api } from "../lib/axios";

export const getUserDetails = async (username: string) => {
  const response = await api.get(`users/${username}`);
  return response.data;
};
