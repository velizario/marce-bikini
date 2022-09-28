import { UserModel } from "../globalstate/UserContextProvider";
import { requestToAPI, getToken } from "./helperFunctions";

// export type DbUser = {
//   email: string;
//   firstName: string;
//   lastName: string;
//   roles: number[];
//   //   _id: "61e21f1803dba323885b382b";
// };

export type DbUser = UserModel;

export const createLoginUser = async (data: {}, loginType: string) => {
  const resData = await requestToAPI(
    `users/${loginType}`,
    "POST",
    data
  );

  if (resData.status !== "success") {
    return { message: "fail", data: null };
  }

  localStorage.setItem("token", resData.token);
  return resData;
};

// Check if browser has a valid token and set isLoggedIn global context variable
export const validateUser = async () => {
  // Call getToken to check if there is a token
  const bearerString = getToken();
  if (!bearerString) return false;

  // If there is a token, fetch the query
  try {
    const resData = await requestToAPI(
      "users/validate",
      "GET"
    );

    if (!resData || resData.status === "error" || resData.status === "fail") {
      throw new Error(resData.message);
    }
    return resData;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const userLogout = () => {
  localStorage.removeItem("token");
};

// export const validateUser = async () => {
//   const response = await fetch(
//     `http://localhost:9000/api/v1/users/validate`,
//     {
//       method: "GET",
//       mode: "cors",
//       cache: "no-cache",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     }
//   );
//   const resData = await response.json();
//   localStorage.setItem("token", resData.token);
//   return resData;
// };
