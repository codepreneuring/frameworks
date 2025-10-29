<template>
    <button @click="$emit('update:counter', counter - 1)">-</button>
</template>

<script setup>
defineProps(["counter"]);
defineEmits(["update:counter"]);
</script>
