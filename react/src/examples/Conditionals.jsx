import { useState } from "react";

export default function Conditionals() {
    const [loggedIn, setLoggedIn] = useState(false);

    function toggle() {
        setLoggedIn(!loggedIn);
    }

    return <>{loggedIn ? <button onClick={toggle}>Log out</button> : <button onClick={toggle}>Log in</button>}</>;
}
