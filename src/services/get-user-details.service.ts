import { api } from "../lib/axios";
import { User } from "../models/User";

export const getUserDetails = async (username: string) => {
  const response = await api.get<User>(`users/${username}`);
  return response.data;
};
