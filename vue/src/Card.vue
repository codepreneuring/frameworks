<template>
    <div class="container">
        <span class="header">{{ header }}</span>
        <div class="body">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps(["header"]);
</script>

<style scoped>
.container {
    width: 300px;
    height: 200px;
    border: 1px solid lightgray;
    padding: 20px;
    overflow: auto;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 20px;
}

.header {
    font-size: 30px;
    font-weight: bold;
}
</style>
