import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (credentials: {
  identifier: string;
  password: string;
  rememberMe: boolean;
}) => {
  try {
    
    const response = await apiClient.post("/auth/login", credentials);
    console.log('response', response);
    return response.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
};

export const verifyOtp = async (otpData: {
  identifier: string;
  otp: string;
  rememberDevice: boolean;
}) => {
  try {
    const response = await apiClient.post("/auth/verify-otp", otpData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  loginUser,
  verifyOtp,
};
