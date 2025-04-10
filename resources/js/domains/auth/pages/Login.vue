<script setup lang="ts">
import { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { postRequest } from '../../../services/http';
import LoginForm from '../components/LoginForm.vue';
import { User } from '../types';

const router = useRouter();
const user = { email: "", password: "" };
const errors = ref({});

const handleSubmit = async (user: User) => {
    try {
        await postRequest("/auth/login", user);
        router.push({ name: "users.overview" });
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 422) {
            errors.value = error.response?.data.errors;
        }
    }
};
</script>

<template>
    <LoginForm
        class="max-w-xs m-auto mt-32"
        :user="user"
        :errors="errors"
        @submitForm="handleSubmit"
    />
</template>