import React from "react";
import useIncreament from "../hooks/counter";

const Counter2 = () => {
    const [count, setCount] = useIncreament(2);
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={setCount}>Add 2</button>
        </>
    )
}

export default Counter2
