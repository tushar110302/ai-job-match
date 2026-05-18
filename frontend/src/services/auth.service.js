import { apiClient } from "./api";
export class AuthApi {
    static login = async (payload) => await apiClient("auth/login", "POST", payload);
    static signup = async (payload) => await apiClient("auth/signup", "POST", payload);
    static logout = async () => await apiClient("auth/logout", "POST");
    static getUser = async () => await apiClient("auth/getUser", "POST");
}