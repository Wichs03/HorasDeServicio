
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://www.hs-service.api.crealape.com/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

