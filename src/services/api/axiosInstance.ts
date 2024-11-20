import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL ,
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("Unauthorized. Redirecting to login...");
      localStorage.removeItem("accessToken");
      console.error("Unauthorized. Redirecting to login...");
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
