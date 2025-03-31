<script setup lang="ts">
import { computed } from "vue";
import type { User, UserErrors } from "../types";

const props = defineProps<{
    user: User;
    title?: string;
    submitText?: string;
    errors?: UserErrors;
}>();

// const user = ref({ ...props.user });
const user = computed(() => props.user)
</script>

<template>
    <form
        class="px-8 pt-4 pb-8 mx-auto bg-white rounded shadow-md"
        @submit.prevent="$emit('submitForm', user)"
    >
        <div v-if="props.title" class="mb-4 text-2xl font-bold text-center">
            <h1>{{ props.title }}</h1>
        </div>

        <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="name"
                >Name:</label
            >
            <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                :class="[errors?.name ? 'mb-1 border-red-500' : '']"
                id="name"
                type="text"
                placeholder="Name"
                v-model="user.name"
            />
            <p v-if="errors?.name" class="text-xs text-red-500">
                {{ errors.name[0] }}
            </p>
        </div>

        <div class="mb-6">
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

        <div class="mb-6">
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

        <div class="mb-6">
            <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password_confirmation"
                >Confirm password:</label
            >
            <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                :class="[errors?.password_confirmation ? 'mb-1 border-red-500' : '']"
                id="password_confirmation"
                type="password"
                placeholder="******************"
                v-model="user.password_confirmation"
            />
            <p v-if="errors?.password_confirmation" class="text-xs italic text-red-500">
                {{ errors?.password_confirmation[0] }}
            </p>
        </div>

        <div class="flex items-center justify-between">
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
                {{ props.submitText || "Submit" }}
            </button>
        </div>
    </form>
</template>
