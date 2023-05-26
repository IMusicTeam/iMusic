import axios from "axios";

export const baseURL = "http://localhost:3000";

export const api = axios.create({
  baseURL: "http://localhost:3000/IMusic",
});

export const uploadImage = (image) => {
  return api.post("/upload", image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
