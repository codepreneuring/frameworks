<script>
    import { counter } from "./stores";
</script>

<button
    on:click={() => {
        $counter++;
    }}
>
    +
</button>
