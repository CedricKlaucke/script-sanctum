<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import errorHandler from "../../../helpers/errorHandler";
import { login } from "../../../services/auth";
import LoginForm from "../components/LoginForm.vue";
import { Credentials } from "../types";

const router = useRouter();
const user = { email: "", password: "" };
const errors = ref({});

const handleSubmit = async (credentials: Credentials) => {
    try {
        await login(credentials);
        router.push({ name: "users.overview" });
    } catch (error) {
        errors.value = errorHandler(error);
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
