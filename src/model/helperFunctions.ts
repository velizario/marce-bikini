export type ApiResponse<T> = {
  status: string;
  data: T;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  const bearerString = token ? `Bearer ${token}` : null;
  return bearerString;
};

export const postToAPI = async (addr: string, method: string, body: {}) => {
  const bearerString = getToken();
  const reqObject: RequestInit = {
    method: method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  };

  if (bearerString)
    reqObject.headers = { ...reqObject.headers, Authorization: bearerString };

  const response = await fetch(addr, reqObject);
  const data = await response.json();
  console.log("Returned data from API:", data);
  return data;
};

export const getFromAPI = async (addr: string, method: string) => {
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

  if (bearerString)
    reqObject.headers = { ...reqObject.headers, Authorization: bearerString };

  const response = await fetch(addr, reqObject);
  const data = await response.json();
  console.log("Returned data from API:", data);
  return data;
};
