<script>
    let randomNumber = "";

    function generateRandomNumber() {
        randomNumber = Math.round(Math.random() * 100);
    }

    $: isEven = randomNumber % 2 == 0;
    $: doubled = randomNumber * randomNumber;
</script>

<button on:click={generateRandomNumber}>Random</button>
<br />
number: {randomNumber}
<br />
Even: {isEven}
<br />
Doubled: {doubled}
