<script setup lang="ts">
import CogwheelIcon from "../../../icons/CogwheelIcon.vue";
import CrossIcon from "../../../icons/CrossIcon.vue";
import { userStore } from "../store";
import type { User } from "../types";

const props = defineProps<{
    users: User[];
    title?: string;
}>();
</script>

<template>
    <div class="relative p-4 bg-white rounded shadow-md">
        <div v-if="props.title" class="mb-4 text-2xl font-bold text-center">
            <h1>{{ props.title }}</h1>
        </div>

        <RouterLink class="absolute top-0 right-0 p-1 shadow-md" :to="{ name: 'users.create' }">Make User</RouterLink>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th colspan="2">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(user, index) in props.users"
                    :class="{ 'border-b': index !== users.length - 1 }"
                >
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <RouterLink :to="{ name: 'users.edit', params: { id: user.id }}">
                            <CogwheelIcon :size="24" />
                        </RouterLink>
                    </td>
                    <td>
                        <a @click="userStore.actions.delete(user)" class="cursor-pointer">
                            <CrossIcon :size="20" color="#EF4444" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    th:nth-child(1),
    td:nth-child(1) {
        width: 50%;
    }

    th:nth-child(2),
    td:nth-child(2) {
        width: 40%;
    }

    th,
    td {
        width: 5%;
    }

    td {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    tr:first-child {
        td {
            padding-top: 0;
        }
    }

    tr:last-child {
        td {
            padding-bottom: 0;
        }
    }
}
</style>