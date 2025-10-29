<script>
    let todos = $state([
        { id: 1, text: "foo" },
        { id: 2, text: "bar" },
        { id: 3, text: "baz" },
    ]);
</script>

<div class="container">
    {#each todos as todo, i}
        <div class="todo">
            <span class="text">{i} {todo.text}</span>
        </div>
    {/each}
</div>
