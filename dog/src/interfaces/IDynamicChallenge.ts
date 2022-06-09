import { IChallenge } from "interfaces";

export default interface IDynamicChallenge extends IChallenge {
  minimum: number;
  decay: number;
}
