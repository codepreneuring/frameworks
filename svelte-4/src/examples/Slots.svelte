<script>
    import Slot from "./Slot.svelte";
</script>

<Slot>
    <span slot="header">AAAAA</span>
    <div slot="body">aaaaa</div>
</Slot>

<Slot>
    <span slot="header">BBBBB</span>
    <div slot="body">bbbbb</div>
</Slot>

<Slot>
    <span slot="header">CCCCC</span>
    <div slot="body">ccccc</div>
</Slot>
