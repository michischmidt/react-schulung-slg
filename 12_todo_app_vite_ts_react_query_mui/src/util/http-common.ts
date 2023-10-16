import axios, { type AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export { client };
