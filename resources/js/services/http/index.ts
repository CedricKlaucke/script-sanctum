import axios, { AxiosRequestConfig } from "axios";

const baseURL = "/api";

const http = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});


export const getRequest = (endpoint: string) => http.get(endpoint);

export const postRequest = <Type>(endpoint: string, data: Type) =>
    http.post(endpoint, data);

export const updateRequest = <Type>(endpoint: string, data: Type) =>
    http.put(endpoint, data);

export const deleteRequest = <Type extends AxiosRequestConfig>(
    endpoint: string,
    data: Type
) => http.delete(endpoint, data);
