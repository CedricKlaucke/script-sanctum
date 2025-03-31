import { storeModuleFactory } from "../../services/store";
import { User } from "./types";

// state
export const userStore = storeModuleFactory<User>("users");
