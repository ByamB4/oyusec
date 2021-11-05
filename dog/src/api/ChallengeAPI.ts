import { BaseRequest } from "api";
import { IChallengeCategory } from "interfaces";

export const ChallengeAPI = {
  getCategories: async (): Promise<{
    status: boolean;
    record: IChallengeCategory[];
  }> => {
    const result = await BaseRequest({
      url: `challenge/categories`,
      method: "GET",
    });

    return result;
  },
};

export default ChallengeAPI;
