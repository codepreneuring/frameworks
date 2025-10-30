<template>
    <div>
        <button @click="generateRandomNumber">Random</button>
        <br />
        number: {{ randomNumber }}
        <br />
        Even: {{ isEven }}
        <br />
        Doubled: {{ doubled }}
    </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
    setup() {
        const randomNumber = ref("");

        function generateRandomNumber() {
            randomNumber.value = Math.round(Math.random() * 100);
        }

        const isEven = computed(() => randomNumber.value % 2 === 0);
        const doubled = computed(() => randomNumber.value * randomNumber.value);

        watch(randomNumber, (newValue) => {
            console.log(newValue);
        });

        return {
            randomNumber,
            generateRandomNumber,
            isEven,
            doubled,
        };
    },
};
</script>
