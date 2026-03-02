import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PUBLIC_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});