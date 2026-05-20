import packegeJson from "../../package.json";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const APP_VERSION = packegeJson?.version ?? "";

export const apiClient = async (
  endpoint,
  method = "GET",
  body = {},
  headers = {},
  timeout = 10000,
) => {
  const isFormData = body instanceof FormData;
console.log(isFormData)
if(isFormData){
  for (const [key, value] of body.entries()) {
    console.log(key, value);
  }
}
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: {
        "x-app-version": APP_VERSION,
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
      signal: AbortSignal.timeout(timeout),
      credentials: "include",
      body: body ? (isFormData ? body : JSON.stringify(body)) : {},
      // body: body ? JSON.stringify(body) : {},
    });

    if (!res.ok) {
      let errorData = {};
      errorData = await res.json();
      throw errorData;
    }
    return await res.json();
  } catch (error) {
    throw error?.error || error;
  }
};
