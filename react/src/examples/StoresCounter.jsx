import { useCounter } from "./StoresCounterContext";

import StoresCounterButtonIncrease from "./StoresCounterButtonIncrease";
import StoresCounterButtonDecrease from "./StoresCounterButtonDecrease";

export default function StoresCounter() {
    const { counter } = useCounter();

    return (
        <div>
            <StoresCounterButtonDecrease /> {counter} <StoresCounterButtonIncrease />
        </div>
    );
}
