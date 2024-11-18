import axios from "axios";
import { END_POINT_ORIGIN } from "../lib/config";

export const axiosQuery = axios.create({
  baseURL: `${END_POINT_ORIGIN}/api`,
});

export const axiosFormDataQuery = axios.create({
  baseURL: `${END_POINT_ORIGIN}/api`,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});
