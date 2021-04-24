import axios from "axios";

export const objDetect = axios.create({
  baseURL: "https://nvision.nipa.cloud/api/v1",
  headers: {
    Authorization:
      "ApiKey cdb29f355cb4059995e05420dc8d963f657898bf3a5f2f5e7a88c58279f5e4a0a1c4c4cf874594b42e413fc45c425425ac",
    "Content-Type": "application/json",
  },
});
