import { useCounter } from "./StoresCounterContext";

export default function StoresCounterButtonDecrease() {
    const { counter, setCounter } = useCounter();

    return <button onClick={() => setCounter(counter - 1)}>-</button>;
}
