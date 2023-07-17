import React from "react";
import useIncreament from "../hooks/counter";

const Counter1 = () => {
    const [count, setCount] = useIncreament(1);
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={setCount}>Add 1</button>
        </>
    )
}

export default Counter1
