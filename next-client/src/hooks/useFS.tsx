import { useContext } from "react";
import { FSContext } from "../context/FSContext";

export default function useFS() {
  return useContext(FSContext);
}
