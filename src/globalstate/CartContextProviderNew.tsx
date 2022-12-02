import React, { useContext, useEffect, useState } from "react";
import { CartUserModel, getCart } from "../model/cartModel";
import { ApiResponse } from "../model/helperFunctions";
import { productModelApiImpl } from "../model/productModelApi";
import { UserContext } from "./UserContextProvider";
import { Product, Props } from "../Types"

// define Cart type and context
type CartContextItems = {
  isSet: boolean;
  cartItems: CartUserModel[];
  productItems: Product[];
  setCartItems: (cartData: CartUserModel[]) => void;
};

const cartDefaultContext: CartContextItems = {
  isSet: false,
  cartItems: [],
  productItems: [],
  setCartItems: () => {},
};

export const CartContext = React.createContext(cartDefaultContext);

const useCartContextItems = (): CartContextItems=> {
  const userContext = useContext(UserContext);

  const setCartItems = async (cartItems: CartUserModel[]) => {
    // This fetches all products one by one. Change it by introducing the product list into the cart.?
    const productItems = await Promise.all(
      cartItems.map((cartItem) =>
        productModelApiImpl.getProductById(cartItem.productId.toString())
      )
    );

    setCartState((state) => {
      return {
        ...state,
        cartItems,
        productItems,
        isSet: true,  
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

  const initCartState: CartContextItems = {
    isSet: false,
    cartItems: [],
    productItems: [],
    setCartItems,
  };

  const [ , setCartState] = useState<CartContextItems>(initCartState);


}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  // Handle Cart context




  


  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
