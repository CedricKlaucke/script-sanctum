<script setup lang="ts">
import { onMounted } from "vue";
import { getCurrentUser, getLoggedInUser, logout } from "../services/auth";

onMounted(async () => {
    await getCurrentUser();
});

const items = [
    {
        name: "Overview",
        link: "users.overview",
    },
];

const user = getLoggedInUser;
</script>

<template>
    <nav class="absolute top-0 left-0 w-screen h-10 shadow-md">
        <ul class="flex h-full">
            <li v-for="item in items" class="pl-2 my-auto">
                <RouterLink :to="{ name: item.link }">
                    {{ item.name }}
                </RouterLink>
            </li>

            <span class="mx-auto" />

            <a @click="console.log(getLoggedInUser)">Test</a>

            <li class="pr-2 my-auto">
                <template v-if="user">
                    <span>welcome {{ user.name }} | </span>
                    <a @click="logout()" class="cursor-pointer">Logout</a>
                </template>
                
                <template v-else>
                    <RouterLink :to="{ name: 'auth.login' }">Login</RouterLink>
                </template>
            </li>
        </ul>
    </nav>
</template>
