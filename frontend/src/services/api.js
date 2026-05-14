import packegeJson from "../../package.json";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const APP_VERSION = packegeJson?.version ?? "";

const _apiClient = async (
  endpoint,
  method = "GET",
  body = {},
  headers = {},
  timeout = 1000,
) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-app-version": APP_VERSION,
        ...headers,
      },
      signal: AbortSignal.timeout(timeout),
      credentials: "include",
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!res.ok) {
      let errorData = {};
      errorData = await res.json();
      throw errorData;
    }
    return await res.json();
  } catch (error) {
    throw error.error;
  }
};

export class Api {
    static login = async (payload) => await _apiClient("auth/login", "POST", payload);
    static signup = async (payload) => await _apiClient("auth/signup", "POST", payload);
    static logout = async () => await _apiClient("auth/logout", "POST");
    static getUser = async () => await _apiClient("auth/getUser", "POST");
}