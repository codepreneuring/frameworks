import Card from "./Card";
import State from "./examples/State";
import Reactivity from "./examples/Reactivity";
import Binding from "./examples/Binding";
import ComponentsCounter from "./examples/ComponentsCounter";
import StoresCounter from "./examples/StoresCounter";
import Conditionals from "./examples/Conditionals";
import Loops from "./examples/Loops";
import Css from "./examples/Css";
import Slots from "./examples/Slots";

import { CounterProvider } from "./examples/StoresCounterContext";

export default function App() {
    let styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
        },
    };
    return (
        <>
            <div style={styles.container}>
                <Card header={"State"} body={<State />} />
                <Card header={"Reactivity"} body={<Reactivity />} />
                <Card header={"Binding"} body={<Binding />} />
                <Card header={"Components"} body={<ComponentsCounter />} />
                <Card
                    header={"Stores"}
                    body={
                        <CounterProvider>
                            <StoresCounter />
                        </CounterProvider>
                    }
                />
                <Card header={"Conditionals"} body={<Conditionals />} />
                <Card header={"Loops"} body={<Loops />} />
                <Card header={"Css"} body={<Css />} />
                <Card header={"Slots"} body={<Slots />} />
            </div>
        </>
    );
}
