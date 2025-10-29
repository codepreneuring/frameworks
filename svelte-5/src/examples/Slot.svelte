<script>
    let { header, body } = $props();
</script>

<div class="container">
    <div class="header">
        {@render header()}
    </div>

    <div class="body">
        {@render body()}
    </div>
</div>

<style>
    .container {
        display: flex;
        gap: 10px;
    }

    .header {
        color: blue;
    }

    .body {
        color: red;
    }
</style>
