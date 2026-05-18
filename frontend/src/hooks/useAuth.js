import React, { useState } from "react";
import { useAuthContext } from "@/context/auth.context";
import { AuthApi } from "@/services/auth.service";

const useAuth = () => {
  const { user, setUser, logout, authLoading } = useAuthContext();
  const [actionLoading, setActionLoading] = useState(false);

  const handleLogin = async (payload) => {
    setActionLoading(true);
    try {
      const response = await AuthApi.login(payload);
      setUser(response?.user);
      return response;
    } catch (error) {
      console.log("handleLogin::error: ", error);
      return { success: false, error };
    } finally {
      setActionLoading(false);
    }
  };

  const handleSignup = async (payload) => {
    setActionLoading(true);
    try {
      const response = await AuthApi.signup(payload);
      //   console.log(response);
      setUser(response?.user);
      return response;
    } catch (error) {
      console.log("handleSignup::error: ", error);
      return { success: false, error };
    } finally {
      setActionLoading(false);
    }
  };

  const handleLogout = async () => {
    setActionLoading(true);
    try {
      const response = await AuthApi.logout();
      logout();
      return response;
    } catch (error) {
      console.log("handleLogout::error: ", error);
      return { success: false, error };
    } finally {
      setActionLoading(false);
    }
  };

  return {
    user,
    actionLoading,
    authLoading,
    handleLogin,
    handleSignup,
    handleLogout,
  };
};

export default useAuth;
