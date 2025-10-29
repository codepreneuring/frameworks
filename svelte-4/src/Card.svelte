<div class="container">
    <div class="header">
        <slot name="header" />
    </div>

    <div class="body">
        <slot />
    </div>
</div>

<style>
    .container {
        width: 300px;
        height: 200px;
        border: 1px solid lightgray;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
    }

    .header {
        font-size: 30px;
        font-weight: bold;
        padding: 20px 20px 0px 20px;
    }

    .body {
        padding: 20px;
    }
</style>
