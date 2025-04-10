import { AxiosError } from "axios";

export default function errorHandler<Type>(error: Type) {
    if (error instanceof AxiosError && error.response?.status === 422) {
        return error.response?.data.errors;
    }
}
