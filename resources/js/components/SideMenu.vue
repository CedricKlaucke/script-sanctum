<script setup lang="ts">
import { computed } from "vue";
import { getCurrentUser, getLoggedInUser, logout } from "../services/auth";

getCurrentUser();

const items = [
    {
        name: "Overview",
        link: "users.overview",
    },
];

const user = computed(() => getLoggedInUser.value);
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

            <li v-if="!user" class="pr-2 my-auto">
                <RouterLink :to="{ name: 'auth.login' }">Login</RouterLink>
            </li>

            <li v-if="user" class="pr-2 my-auto">
                <span>welcome {{ user.name }} | </span>
                <a @click="logout()" class="cursor-pointer">Logout</a>
            </li>
        </ul>
    </nav>
</template>
