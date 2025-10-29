<script>
    let { counter = $bindable() } = $props();
</script>

<button
    onclick={() => {
        counter++;
    }}
>
    +
</button>
