import { BaseRequest } from "api";
import { IChallenge, IChallengeCategory } from "interfaces";

export const ChallengeAPI = {
  getCategories: async (): Promise<{
    status: boolean;
    data: IChallengeCategory[];
  }> => {
    const result = await BaseRequest({
      url: `challenge/category/list`,
      method: "GET",
    });

    return result;
  },
  getChallenges: async (): Promise<{
    status: boolean;
    data: IChallenge[];
  }> => {
    const result = await BaseRequest({
      url: `challenge/list`,
      method: "GET",
    });

    return result;
  },
};

export default ChallengeAPI;
