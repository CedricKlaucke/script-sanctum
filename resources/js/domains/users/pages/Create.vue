<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import errorHandler from "../../../helpers/errorHandler";
import UserForm from "../components/UsersForm.vue";
import { userStore } from "../store";
import { User } from "../types";

const router = useRouter();
const user: User = { id: 0, name: "", email: "" };
const errors = ref({});

const handleSubmit = async (createdUser: User) => {
    try {
        await userStore.actions.create(createdUser);
        router.push({ name: "users.overview" });
    } catch (error) {
        errors.value = errorHandler(error);
    }
};
</script>

<template>
    <UserForm
        class="max-w-xs m-auto mt-32"
        title="Create user"
        :user="user"
        :errors="errors"
        @submitForm="handleSubmit"
    />
</template>
