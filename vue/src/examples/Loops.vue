<template>
    <div v-for="(todo, i) in todos" :key="todo.id" class="todo">
        <span class="text">{{ i }} {{ todo.text }}</span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
    { id: 3, text: "baz" },
]);
</script>
