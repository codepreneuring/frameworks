import { useState, useRef } from "react";

export default function Binding() {
    const [value, setValue] = useState("");
    const firstInputElement = useRef(null);

    return (
        <div>
            Two-way: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={firstInputElement} />
            <br />
            One-way: <input type="text" key={value} defaultValue={value} />
            <br />
            Two-way: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <br />
            <button
                onClick={() => {
                    firstInputElement.current.select();
                }}
            >
                Focus first input
            </button>
        </div>
    );
}
