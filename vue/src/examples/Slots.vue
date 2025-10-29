<template>
    <div class="container">
        <Slot>
            <template #header>
                <span>AAAAA</span>
            </template>
            <template #body>
                <div>aaaaa</div>
            </template>
        </Slot>

        <Slot>
            <template #header>
                <span>BBBBB</span>
            </template>
            <template #body>
                <div>bbbbb</div>
            </template>
        </Slot>

        <Slot>
            <template #header>
                <span>CCCCC</span>
            </template>
            <template #body>
                <div>ccccc</div>
            </template>
        </Slot>
    </div>
</template>

<script setup>
import Slot from "./Slot.vue";
</script>
