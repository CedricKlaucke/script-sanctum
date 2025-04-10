<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import errorHandler from "../../../helpers/errorHandler";
import UsersForm from "../components/UsersForm.vue";
import { userStore } from "../store";
import type { User } from "../types";

userStore.actions.getById(+useRoute().params.id);

const user = userStore.getters.byId(+useRoute().params.id);
const router = useRouter();
const errors = ref({});

const handleSubmit = async (updatedUser: User) => {
    try {
        await userStore.actions.update(updatedUser);
        router.push({ name: "users.overview" });
    } catch (error) {
        errors.value = errorHandler(error);
    }
};
</script>

<template>
    <UsersForm
        class="max-w-xs m-auto mt-32"
        title="Edit user"
        submit-text="Edit"
        :user="user"
        :errors="errors"
        @submitForm="handleSubmit"
    />
</template>
