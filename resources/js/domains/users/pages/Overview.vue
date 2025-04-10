<script setup lang="ts">
import UsersTable from "../components/UsersTable.vue";
import { userStore } from "../store";

userStore.actions.getAll();

const users = userStore.getters.all;
</script>

<template>
    <UsersTable
        class="max-w-lg mx-auto mt-16"
        title="Users overview"
        :users="users"
    />
</template>
