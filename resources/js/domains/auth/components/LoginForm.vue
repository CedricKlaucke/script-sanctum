<script setup lang="ts">
import { ref } from "vue";

interface User {
    email: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
}

const props = defineProps<{
    user: User;
    errors?: Errors;
}>();

const user = ref({ ...props.user });
</script>

<template>
    <form
        class="px-8 pt-4 pb-8 mx-auto bg-white rounded shadow-md"
        @submit.prevent="$emit('submitForm', user)"
    >
        <div class="text-2xl font-bold text-center">
            <h1>Login</h1>
        </div>

        <div class="mt-4">
            <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
                >Email:</label
            >
            <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                :class="[errors?.email ? 'mb-1 border-red-500' : '']"
                id="email"
                type="email"
                placeholder="email@mail.com"
                v-model="user.email"
            />
            <p v-if="errors?.email" class="text-xs text-red-500">
                {{ errors?.email[0] }}
            </p>
        </div>

        <div class="mt-6">
            <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
                >Password:</label
            >
            <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                :class="[errors?.password ? 'mb-1 border-red-500' : '']"
                id="password"
                type="password"
                placeholder="******************"
                v-model="user.password"
            />
            <p v-if="errors?.password" class="text-xs italic text-red-500">
                {{ errors?.password[0] }}
            </p>
        </div>

        <div class="flex items-center justify-between mt-6">
            <RouterLink
                class="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                :to="{ name: 'users.overview' }"
            >
                Cancel
            </RouterLink>

            <button
                class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>
        </div>
    </form>
</template>
