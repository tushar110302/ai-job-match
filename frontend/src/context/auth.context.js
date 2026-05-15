"use client";

import { Api } from "@/services/api";
import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext(null);

const initialState = {
  user: null,
};

const uathReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    uathReducer,
    initialState,
    () => {
      if (typeof window === "undefined") {
        return initialState;
      }
      const storedUser = localStorage.getItem("user");
      return { user: storedUser ? JSON.parse(storedUser) : null };
    },
  );

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    authDispatch({ type: "SET_USER", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
      const _getUser = async () => {
        try {
          const response = await Api.getUser();
          //   console.log(response);
          setUser(response?.user);
        } catch (error) {
          console.log("_getUser::error: ", error);
        }
      }
      _getUser();
  },[])

  return (
    <AuthContext.Provider value={{ ...authState, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
