import { storeModuleFactory } from "../../services/store";
import { User } from "./types";

// state
export const authStore = storeModuleFactory<User>("users");
