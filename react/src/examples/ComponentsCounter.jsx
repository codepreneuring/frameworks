import { useState } from "react";

import ComponentsCounterButtonIncrease from "./ComponentsCounterButtonIncrease";
import ComponentsCounterButtonDecrease from "./ComponentsCounterButtonDecrease";

export default function ComponentsCounter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <ComponentsCounterButtonDecrease counter={counter} setCounter={setCounter} /> {counter} <ComponentsCounterButtonIncrease counter={counter} setCounter={setCounter} />
        </div>
    );
}
