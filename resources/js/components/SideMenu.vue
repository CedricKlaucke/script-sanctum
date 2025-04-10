<script setup lang="ts">
import { postRequest } from '../services/http';

const items = [
    {
        name: "Overview",
        link: "users.overview",
    },
];
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

            <li class="pr-2 my-auto">
                <RouterLink :to="{ name: 'auth.login' }">Login</RouterLink>
            </li>

            <li class="pr-2 my-auto">
                <a @click="postRequest('/auth/logout', null)" class="cursor-pointer">Logout</a>
            </li>
        </ul>
    </nav>
</template>
