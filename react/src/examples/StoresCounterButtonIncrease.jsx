import { useCounter } from "./StoresCounterContext";

export default function StoresCounterButtonIncrease() {
    const { counter, setCounter } = useCounter();

    return <button onClick={() => setCounter(counter + 1)}>+</button>;
}
