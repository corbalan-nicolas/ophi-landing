import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.PUBLIC_BACK_URL ?? 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});