<div class="container">
    <div class="header">
        <slot name="header" />
    </div>

    <div class="body">
        <slot name="body" />
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
