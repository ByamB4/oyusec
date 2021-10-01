// import React, { useEffect, useState } from "react";
// import { IUser } from "interfaces";
// import Cookies from "universal-cookie";
// import jwt_decode from "jwt-decode";
// import { useRouter } from "next/router";
// import { UserAPI } from "api/UserAPI";

// const cookie = new Cookies();
// type UserContextType = {
//   token: string | null;
//   setToken: (value: string | null) => void;
//   user: IUser | null;
//   refreshUser: () => void;
// };

// const UserContext = React.createContext<UserContextType>({
//   token: null,
//   // @typescript-eslint/no-empty-function
//   setToken: () => {},
//   user: null,
//   // @typescript-eslint/no-empty-function
//   refreshUser: () => {},
// });

// export const UserProvider: React.FC<unknown> = ({ children }) => {
//   const router = useRouter();
//   const [token, setToken] = useState<string | null>(null);
//   const [user, setUser] = useState<IUser | null>(null);

//   const handleSetToken: (value: string | null) => void = (value) => {
//     if (value === null) {
//       cookie.remove("base-token", {
//         path: "/",
//         domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
//       });
//       setUser(null);
//     } else {
//       const { exp }: { exp: number } = jwt_decode(value);

//       cookie.set("base-token", value, {
//         path: "/",
//         domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
//         expires: new Date(exp * 1000),
//       });
//     }

//     setToken(value);
//   };

//   const refreshUser = () => {
//     if (token) {
//       UserAPI.getUser()
//         .then((res) => {
//           setUser(res.data);
//           // check if user setup his firstName and lastName
//           // if (!res.firstName || !res.lastName) {
//           //   router.push("/profile");
//           // }
//         })
//         .catch(() => {
//           // remove token because it's expired
//           handleSetToken(null);
//           router.push("/");
//         });
//     }
//   };

//   // хуудасруу анх нэвтрэхэд localstorage дээр token байгаа эсэхийг шалгах
//   useEffect(() => {
//     const baseToken = cookie.get("base-token");
//     if (baseToken) {
//       handleSetToken(baseToken);
//     } else {
//       cookie.remove("base-token", {
//         path: "/",
//         domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
//       });
//     }
//   }, []);

//   // хэрвээ token state-ийн мэдээлэл өөрчлөгдвөл тухайн нөхцлөөс хамааруулан шинэчлэх

//   useEffect(() => {
//     if (token) {
//       UserAPI.getUser()
//         .then((res) => {
//           setUser(res.data);
//         })
//         .catch(() => {
//           // remove token because it's expired
//           handleSetToken(null);
//           router.push("/");
//         });
//     }
//   }, [token]);

//   return (
//     <UserContext.Provider
//       value={{ token, setToken: handleSetToken, user, refreshUser }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useToken: () => {
//   token: string | null;
//   setToken: (value: string | null) => void;
// } = () => {
//   const { token, setToken } = React.useContext(UserContext);

//   return { token, setToken };
// };

// export const useUser: () => { user: IUser | null; refreshUser: () => void } =
//   () => {
//     return React.useContext(UserContext);
//   };

import React from "react";

const user = () => {
  return <div></div>;
};

export default user;
