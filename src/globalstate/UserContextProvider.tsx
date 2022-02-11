import React, { useEffect, useMemo, useState } from "react";
import { validateUser } from "../model/userModel";

export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
  passwordConfirm: string | undefined;
  imageUrl: string;
  _id: string;
  roles: Role[];
}

export enum Role {
  USER,
  ADMIN,
}

// define User type and context
type UserContext = {
  isLoggedIn: UserModel | null | false;
  setIsLoggedIn: (user: UserModel | null | false) => void;
};

const userDefaultContext: UserContext = {
  isLoggedIn: null,
  setIsLoggedIn: () => {},
};

export const UserContext = React.createContext(userDefaultContext);

export const UserContextProvider: React.FC = ({ children }) => {
  // Handle User context
  const setIsLoggedIn = useMemo(
    () => (user: UserModel | null | false) => {
      setUserState((state) => {
        return { ...state, isLoggedIn: user };
      });
    },
    []
  );

  // Check if browser has a valid token and set isLoggedIn global context variable
  useEffect(() => {
    const checkLoggedInUser = async () => {
      const user: UserModel = await validateUser();
      if (user) {
        setIsLoggedIn(user);
      }
    };

    checkLoggedInUser();
  }, [setIsLoggedIn]);

  const initUserState: UserContext = {
    isLoggedIn: null,
    setIsLoggedIn,
  };

  const [userState, setUserState] = useState<UserContext>(initUserState);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};
