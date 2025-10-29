<script>
    import StoresCounterButtonIncrease from "./StoresCounterButtonIncrease.svelte";
    import StoresCounterButtonDecrease from "./StoresCounterButtonDecrease.svelte";

    import { counter } from "./stores";
</script>

<StoresCounterButtonDecrease />

{$counter}

<StoresCounterButtonIncrease />
