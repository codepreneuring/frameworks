<template>
    <div>
        <StoresCounterButtonDecrease />
        {{ counter }}
        <StoresCounterButtonIncrease />
    </div>
</template>

<script setup>
import { counter } from "./stores";
import StoresCounterButtonIncrease from "./StoresCounterButtonIncrease.vue";
import StoresCounterButtonDecrease from "./StoresCounterButtonDecrease.vue";
</script>
