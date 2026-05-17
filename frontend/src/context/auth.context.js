"use client";

import { AuthApi } from "@/services/api";
// import { AuthApi } from "@/services/auth.services";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext(null);

const initialState = {
  user: null,
};

const authReducer = (state, action) => {
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
  const [authLoading, setAuthLoading] = useState(true);

  const [authState, authDispatch] = useReducer(
    authReducer,
    initialState,
    () => {
      if (typeof window === "undefined") {
        return initialState;
      }
      const storedUser = localStorage.getItem("user");
      console.log("AUTH PROVIDER : user : ", JSON.parse(storedUser));
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
      setAuthLoading(true);
      try {
        const response = await AuthApi.getUser();
        if (response?.user) {
          setUser(response.user);
        }
      } catch (error) {
        // Session expired / not logged in — clear stale localStorage
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT" });
      } finally {
        setAuthLoading(false);
      }
    };
    _getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, authLoading, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
