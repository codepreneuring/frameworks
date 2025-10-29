<template>
    <button v-if="loggedIn" @click="toggle">Log out</button>
    <button v-else @click="toggle">Log in</button>
</template>

<script setup>
import { ref } from "vue";

const loggedIn = ref(false);

function toggle() {
    loggedIn.value = !loggedIn.value;
}
</script>
