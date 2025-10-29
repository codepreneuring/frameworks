import { useState } from "react";

export default function Component() {
    const [text] = useState("world!");
    return <div>Hello {text}</div>;
}
