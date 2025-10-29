<script>
    import ComponentsCounterButtonIncrease from "./ComponentsCounterButtonIncrease.svelte";
    import ComponentsCounterButtonDecrease from "./ComponentsCounterButtonDecrease.svelte";

    let counter = $state(0);
</script>

<ComponentsCounterButtonDecrease bind:counter />

{counter}

<ComponentsCounterButtonIncrease bind:counter />
