<template>
    <div>
        <ComponentsCounterButtonDecrease v-model:counter="counter" />
        {{ counter }}
        <ComponentsCounterButtonIncrease v-model:counter="counter" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ComponentsCounterButtonDecrease from "./ComponentsCounterButtonDecrease.vue";
import ComponentsCounterButtonIncrease from "./ComponentsCounterButtonIncrease.vue";

const counter = ref(0);
</script>
