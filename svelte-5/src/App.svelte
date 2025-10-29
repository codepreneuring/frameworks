<script>
    import Card from "./Card.svelte";
    import State from "./examples/State.svelte";
    import Css from "./examples/Css.svelte";
    import Binding from "./examples/Binding.svelte";
    import ComponentsCounter from "./examples/ComponentsCounter.svelte";
    import Slots from "./examples/Slots.svelte";
    import StoresCounter from "./examples/StoresCounter.svelte";
    import Reactivity from "./examples/Reactivity.svelte";
    import Conditionals from "./examples/Conditionals.svelte";
    import Loops from "./examples/Loops.svelte";
</script>

<div class="container">
    <Card>
        <span slot="header">State</span>
        <State />
    </Card>

    <Card>
        <span slot="header">Reactivity</span>
        <Reactivity />
    </Card>

    <Card>
        <span slot="header">Binding</span>
        <Binding />
    </Card>

    <Card>
        <span slot="header">Components</span>
        <ComponentsCounter />
    </Card>

    <Card>
        <span slot="header">Stores</span>
        <StoresCounter />
    </Card>

    <Card>
        <span slot="header">Conditionals</span>
        <Conditionals />
    </Card>

    <Card>
        <span slot="header">Loops</span>
        <Loops />
    </Card>

    <Card>
        <span slot="header">CSS</span>
        <Css />
    </Card>

    <Card>
        <span slot="header">Slots</span>
        <Slots />
    </Card>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px;
    }
</style>
