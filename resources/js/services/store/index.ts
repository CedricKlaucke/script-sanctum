import { computed, Ref, ref } from "vue";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../http";

export const storeModuleFactory = <Type extends { id: number }>(moduleName: string) => {
    const state = ref<Type[]>([]) as Ref<Type[]>;

    const getters = {
        all: computed(() => Object.values(state.value)),

        byId: (id: number) => computed(() => state.value[id]),
    };

    const setters = {
        setAll: (items: Type[]) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },

        setById: (item: Type) => {
            state.value[item.id] = Object.freeze(item);
        },

        deleteById: (item: Type) => {
            delete state.value[item.id];
        },
    };

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (data) setters.setAll(data);
        },

        getById: async (id: number) => {
            if (!state.value[id]) {
                const { data } = await getRequest(`${moduleName}/${id}`);
                if (data) setters.setById(data);
            }
        },

        create: async (item: Type) => {
            const { data } = await postRequest(moduleName, item);
            if (data) setters.setById(data);
        },

        update: async (item: Type) => {
            const { data } = await updateRequest(`${moduleName}/${item.id}`, item);
            if (data) setters.setById(data);
        },

        delete: async (item: Type) => {
            const { data } = await deleteRequest(`${moduleName}/${item.id}`, { data: item});
            if (data) setters.deleteById(data);
        },
    };

    return {
        state,
        getters,
        setters,
        actions,
    };
};