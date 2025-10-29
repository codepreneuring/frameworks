<template>
    <button @click="generateRandomNumber">Random</button>
    <br />
    <br />
    number: {{ randomNumber }}
    <br />
    <br />
    Even: {{ isEven }}
    <br />
    <br />
    Doubled: {{ doubled }}
</template>

<script setup>
import { ref, computed } from "vue";

const randomNumber = ref("");

function generateRandomNumber() {
    randomNumber.value = Math.round(Math.random() * 100);
}

const isEven = computed(() => randomNumber.value % 2 === 0);
const doubled = computed(() => randomNumber.value * randomNumber.value);
</script>
