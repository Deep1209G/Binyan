import { API_BASE_URL} from "../constants/api";

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log("Signup Error:", error);
    throw error;
  }
};