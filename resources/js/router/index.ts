import axios from "axios";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

async function getRoutes(): Promise<RouteRecordRaw[]> {
    const importedRoutes: RouteRecordRaw[] = [];

    try {
        const { data } = await axios.get("/api/domains");
        const domains: string[] = data.domains;

        for (const key in domains) {
            const domain = domains[key];

            try {
                const { routes } = await import(`../domains/${domain}/routes.ts`);

                importedRoutes.push(...routes);
            } catch (error) {
                console.error(`Failed to import routes for domain: ${domain}`, error);
            }
        }
    } catch (error) {
        console.error("Failed to fetch domains from API", error);
    }

    return importedRoutes;
}

async function createAppRouter() {
    const routes = await getRoutes();

    return createRouter({
        history: createWebHistory(),
        routes,
    });
}

export const router = await createAppRouter();