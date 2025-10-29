import { useState } from "react";

export default function Reactivity() {
    const [randomNumber, setRandomNumber] = useState("");

    function generateRandomNumber() {
        setRandomNumber(Math.round(Math.random() * 100));
    }

    const isEven = randomNumber % 2 === 0;
    const doubled = randomNumber * randomNumber;

    return (
        <div>
            <button onClick={generateRandomNumber}>Random</button>
            <br />
            number: {randomNumber}
            <br />
            Even: {isEven.toString()}
            <br />
            Doubled: {doubled}
        </div>
    );
}
