export type ApiResponse<T> = {
  status: string;
  data: T;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  const bearerString = token ? `Bearer ${token}` : null;
  return bearerString;
};

export const requestToAPI = async (addr: string, method: string, body = {}) => {
  const bearerString = getToken();
  const reqObject: RequestInit = {
    method: method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };


  // Add check for POST requests where body is not empty
  console.log("Here is the object length ~~~~~~~~~~~~~", Object.keys(body).length);
  if (Object.keys(body).length > 0) reqObject.body = JSON.stringify(body);

  if (bearerString)
    reqObject.headers = { ...reqObject.headers, Authorization: bearerString };

  const response = await fetch(addr, reqObject);
  const data = await response.json();
  console.log("Returned data from API:", data);
  return data;
};
