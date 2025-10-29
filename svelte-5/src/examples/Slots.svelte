<script>
    import Slot from "./Slot.svelte";
</script>

<div class="container">
    <Slot>
        {#snippet header()}
            <span>AAAAA</span>
        {/snippet}
        {#snippet body()}
            <div>aaaaa</div>
        {/snippet}
    </Slot>

    <Slot>
        {#snippet header()}
            <span>BBBBB</span>
        {/snippet}
        {#snippet body()}
            <div>bbbbb</div>
        {/snippet}
    </Slot>

    <Slot>
        {#snippet header()}
            <span>CCCCC</span>
        {/snippet}
        {#snippet body()}
            <div>ccccc</div>
        {/snippet}
    </Slot>
</div>
