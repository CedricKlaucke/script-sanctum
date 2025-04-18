import { computed, ref } from "vue";
import { Credentials, User } from "../../domains/auth/types";
import { getRequest, postRequest } from "../http";

const loggedInUser = ref<User | null>();

export const getLoggedInUser = computed(() => loggedInUser.value);

export const login = async (credentials: Credentials) => {
    const { data } = await postRequest("/auth/login", credentials);
    if (!data) return;
    loggedInUser.value = data;
};

export const logout = async () => {
    const { data } = await postRequest("/auth/logout", null);
    if (!data) return;
    loggedInUser.value = null;
};

export const getCurrentUser = async () => {
    const { data } = await getRequest("/auth/user");
    if (!data) return;
    loggedInUser.value = data;
    return loggedInUser.value;
};
