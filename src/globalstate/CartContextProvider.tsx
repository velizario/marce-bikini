import React, { useContext, useEffect, useState } from "react";
import { CartUserModel, getCart } from "../model/cartModel";
import { ApiResponse } from "../model/helperFunctions";
import { Product, productModelImpl } from "../model/productModel";
import { UserContext } from "./UserContextProvider";

// define Cart type and context
type CartContext = {
  cartItems: CartUserModel[];
  productItems: Product[];
  setCartItems: (cartData: CartUserModel[]) => void;
};

const cartDefaultContext: CartContext = {
  cartItems: [],
  productItems: [],
  setCartItems: () => {},
};

export const CartContext = React.createContext(cartDefaultContext);

export const CartContextProvider: React.FC = ({ children }) => {
  // Handle Cart context

  const userContext = useContext(UserContext);

  const setCartItems = async (cartItems: CartUserModel[]) => {
    const productItems = await Promise.all(
      cartItems.map((cartItem) =>
        productModelImpl.getProductById(cartItem.productId.toString())
      )
    );
    setCartState((state) => {
      console.log("New Cart State:", cartItems, productItems);
      return {
        ...state,
        cartItems,
        productItems,
      };
    });
  };

  // NOTE: Get cart initial state from server
  useEffect(() => {
    const getCartItems = async () => {
      if (userContext.isLoggedIn) {
        const cart: ApiResponse<CartUserModel[]> = await getCart(
          userContext.isLoggedIn._id
        );
        setCartItems(cart.data);
      }
    };

    getCartItems();
  }, [userContext]);

  const initCartState: CartContext = {
    cartItems: [],
    productItems: [],
    setCartItems,
  };

  const [cartState, setCartState] = useState<CartContext>(initCartState);

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
