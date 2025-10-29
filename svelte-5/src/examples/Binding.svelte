<script>
    let value = $state("");
    let firstInputElement;
</script>

Two-way: <input type="text" bind:value bind:this={firstInputElement} /><br />
One-way: <input type="text" {value} /><br />
Two-way: <input type="text" bind:value />
<br />
<br />

<button
    onclick={() => {
        firstInputElement.select();
    }}
>
    Focus first input
</button>
