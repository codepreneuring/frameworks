<script>
    let randomNumber = $state("");

    function generateRandomNumber() {
        randomNumber = Math.round(Math.random() * 100);
    }

    let isEven = $derived(randomNumber % 2 == 0);
    let doubled = $derived(randomNumber * randomNumber);
</script>

<button onclick={generateRandomNumber}>Random</button>

number: {randomNumber}
<br />
<br />
Even: {isEven}
<br />
<br />
Doubled: {doubled}
