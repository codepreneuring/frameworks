<template>
    <div>
        Two-way: <input type="text" v-model="value" ref="firstInputElement" /><br />
        One-way: <input type="text" :value="value" /><br />
        Two-way: <input type="text" v-model="value" />
        <br />
        <br />

        <button @click="firstInputElement.select()">Focus first input</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const firstInputElement = ref(null);
</script>
