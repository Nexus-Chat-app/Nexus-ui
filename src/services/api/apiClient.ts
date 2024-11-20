import axiosInstance from "./axiosInstance";

// Define a reusable API client
const apiClient = {
  // POST request for login
  login: async (credentials: { identifier: string; password: string; rememberMe: boolean }) => {
    return await axiosInstance.post("/login", credentials);
  },

  // POST request for OTP verification
  verifyOtp: async (otpData: { identifier: string; otp: string; rememberDevice: boolean }) => {
    return await axiosInstance.post("/verify-otp", otpData);
  },
};

export default apiClient;
