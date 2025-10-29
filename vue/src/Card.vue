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
    width: 250px;
    height: 250px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.header {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 20px 0px 20px;
}

.body {
    padding: 20px;
}
</style>
