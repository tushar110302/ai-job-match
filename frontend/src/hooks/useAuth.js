import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/context/auth.context";
import { AuthApi } from "@/services/auth.service";

const useAuth = () => {
  const { user, setUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (payload) => {
    setLoading(true);
    try {
      const response = await AuthApi.login(payload);
      //   console.log(response);
      setUser(response?.user);
      return response;
    } catch (error) {
      console.log("handleLogin::error: ", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (payload) => {
    setLoading(true);
    try {
      const response = await AuthApi.signup(payload);
      //   console.log(response);
      setUser(response?.user);
      return response;
    } catch (error) {
      console.log("handleSignup::error: ", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await AuthApi.logout();
      logout();
      return response;
    } catch (error) {
      console.log("handleLogout::error: ", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user) return;
    const _getUser = async () => {
      try {
        const response = await AuthApi.getUser();
        //   console.log(response);
        setUser(response?.user);
      } catch (error) {
        console.log("_getUser::error: ", error);
      }
    };
    _getUser();
  }, []);

  return { user, loading, handleLogin, handleSignup, handleLogout };
};

export default useAuth;
