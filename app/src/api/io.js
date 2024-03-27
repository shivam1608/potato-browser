import axios from "axios";

const IO = axios.create({
    baseURL: "https://all-cors-proxy-util.vercel.app/hyperbeam"
});

IO.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json";
    return config;
} , (err)=>Promise.reject(err));


export default IO;