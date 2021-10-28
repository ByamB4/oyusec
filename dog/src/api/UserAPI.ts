import { BaseRequest } from "api";
import { IUser } from "interfaces";

export const UserAPI = {
  getUser: async () => {
    const result = await BaseRequest({
      url: `user`,
      method: "GET",
    });

    return result;
  },
  updateUser: async (data: Partial<IUser>) => {
    const res = await BaseRequest({
      url: "user",
      method: "PUT",
      data,
    });

    return res;
  },
};

export default UserAPI;
