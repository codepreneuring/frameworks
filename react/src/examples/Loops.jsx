import { useState } from "react";

export default function Loops() {
    const [todos] = useState([
        { id: 1, text: "foo" },
        { id: 2, text: "bar" },
        { id: 3, text: "baz" },
    ]);

    return (
        <>
            {todos.map((todo, i) => (
                <div key={todo.id} className="todo">
                    <span className="text">
                        {i} {todo.text}
                    </span>
                </div>
            ))}
        </>
    );
}
