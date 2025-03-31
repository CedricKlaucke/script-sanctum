import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getRequest } from "../services/http";

async function getRoutes() {
    try {
        const { data } = await getRequest("domains");
        const domains: string[] = data.domains;

        const importedRoutes: RouteRecordRaw[] = await Promise.all(domains.map(async (domain) => {
            try {
                const { routes } = await import(`../domains/${domain}/routes.ts`);
                return routes;
            } catch (error) {
                console.error(`Failed to import routes for domain: ${domain}`, error);
                return [];
            }
        }));

        return importedRoutes.flat();
    } catch (error) {
        console.error("Failed to fetch domains from API", error);
        return [];
    }
}

async function createAppRouter() {
    const routes = await getRoutes();

    return createRouter({
        history: createWebHistory(),
        routes,
    });
}

export const router = await createAppRouter();