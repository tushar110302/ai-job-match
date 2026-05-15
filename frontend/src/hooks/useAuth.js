import React, { useState } from "react";
import { useAuthContext } from "@/context/auth.context";
import { Api } from "@/services/api";

const useAuth = () => {
  const { user, setUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (payload) => {
    setLoading(true);
    try {
      const response = await Api.login(payload);
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
      const response = await Api.signup(payload);
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
      const response = await Api.logout();
      logout();
      return response;
    } catch (error) {
      console.log("handleLogout::error: ", error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, handleLogin, handleSignup, handleLogout };
};

export default useAuth;
