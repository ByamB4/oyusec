import axios, { Method, AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

interface BaseRequestProps {
  url: string;
  method: Method;
  params?: unknown;
  data?: unknown;
  contentType?: string;
  authToken?: string;
}

export const BaseRequest = async (props: BaseRequestProps) => {
  // const isMe = props.url === "person/me";
  const token = new Cookies().get("base-token");
  const locale = "en";

  axios.defaults.headers.common.Accept = "application/json";
  axios.defaults.headers.common["Accept-Language"] = locale || "mn";
  axios.defaults.headers.common["Content-Type"] = props.contentType
    ? props.contentType
    : "application/json";
  axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";

  if (props.authToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${props.authToken}`;
  }
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  if (!props.authToken && !token) {
    axios.defaults.headers.common.Authorization = ``;
  }
  const config: AxiosRequestConfig = {
    baseURL: process.env.PUBLIC_BACKEND_API_URL,
    ...props,
  };
  const { data, status, statusText } = await axios(config);
  // console.log('responseInstance', responseInstance)
  // const response = responseInstance.data;
  // console.log(data);

  // console.log('response', data, status !== 200, status)
  if (status !== 200) {
    const error = new Error(statusText);
    // catchError(error, isMe);
    throw error;
  }

  return data || false;
};
