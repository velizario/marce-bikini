import { ApiResponse, getFromAPI, postToAPI } from "./helperFunctions";

export interface CartUserModel {
  productId: number;
  size: string;
  quantity: number;
  _id?: string;
}

// export interface CartDBModel {
//   _id?: string;
//   data: CartUserModel[];
// }

// NOTE: This now works as Update cart, should it be moved to the server? Maybe yes, to improve client performance
export const addToCart = async (userId: string, cartData: CartUserModel[]) => {
  const data: Promise<ApiResponse<CartUserModel[]>> = await postToAPI(
    `http://localhost:9000/api/v1/carts/${userId}`,
    "PATCH",
    cartData
  );
  return data;
};

export const getCart = async (userId: string) => {
  const data: Promise<ApiResponse<CartUserModel[]>> = await getFromAPI(
    `http://localhost:9000/api/v1/carts/${userId}`,
    "GET"
  );

  return data;
};

//Delete product from Cart
export const removeFromCart = async (
  userId: string,
  productInfo: CartUserModel
) => {
  const data: Promise<ApiResponse<CartUserModel[]>> = await postToAPI(
    `http://localhost:9000/api/v1/carts/${userId}`,
    "DELETE",
    productInfo
  );
  return data;
};
