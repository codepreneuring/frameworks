<script>
    let loggedIn = $state(false);

    function toggle() {
        loggedIn = !loggedIn;
    }
</script>

{#if loggedIn}
    <button onclick={toggle}>Log out</button>
{:else}
    <button onclick={toggle}>Log in</button>
{/if}
