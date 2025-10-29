<template>
    <div>Hello {{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("world!");
</script>
