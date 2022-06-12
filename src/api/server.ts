import { $fetch } from "ohmyfetch";

const api = $fetch.create({
    baseURL: "http://34.101.67.125:8000",
});

export default api;