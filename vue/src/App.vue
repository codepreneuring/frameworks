<template>
    <div :style="styles.container">
        <Card header="State">
            <State />
        </Card>
        <Card header="Reactivity">
            <Reactivity />
        </Card>
        <Card header="Binding">
            <Binding />
        </Card>
        <Card header="Components">
            <ComponentsCounter />
        </Card>
        <Card header="Stores">
            <StoresCounter />
        </Card>
        <Card header="Conditionals">
            <Conditionals />
        </Card>
        <Card header="Loops">
            <Loops />
        </Card>
        <Card header="Css">
            <Css />
        </Card>
        <Card header="Slots">
            <Slots />
        </Card>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
import State from "./examples/State.vue";
import Reactivity from "./examples/Reactivity.vue";
import Binding from "./examples/Binding.vue";
import ComponentsCounter from "./examples/ComponentsCounter.vue";
import StoresCounter from "./examples/StoresCounter.vue";
import Conditionals from "./examples/Conditionals.vue";
import Loops from "./examples/Loops.vue";
import Css from "./examples/Css.vue";
import Slots from "./examples/Slots.vue";

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
    },
};
</script>
