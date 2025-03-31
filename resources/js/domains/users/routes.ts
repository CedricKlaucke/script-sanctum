import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Overview from "./pages/Overview.vue";

export const routes = [
    { path: "/users", component: Overview, name: "users.overview" },
    { path: "/users/create", component: Create, name: "users.create" },
    { path: "/users/:id", component: Edit, name: "users.edit" },
];
