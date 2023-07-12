import {useState} from "react";

const Calculator = () => {
    const [input, setInput] = useState({
        num1: "",
        num2: "",
    });

    const [result, setResult] = useState("");

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handlePlus = () => {
        setResult(Number(input.num1) + Number(input.num2))
    }

    const handleMinus = () => {
        setResult(Number(input.num1) - Number(input.num2))
    }

    const handleMultiple = () => {
        setResult(Number(input.num1) * Number(input.num2))
    }

    const handleDevide = () => {
        setResult(Number(input.num1) / Number(input.num2))
    }

    return (
        <div>
            <input onChange={handleInput} type="number" name="num1" value={input.num1} />
            <br />
            <input onChange={handleInput} type="number" name="num2" value={input.num2} />
            <p className="result">Result: {result}</p>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handleMultiple}>x</button>
            <button onClick={handleDevide}>/</button>
        </div>
    )
}

export default Calculator;
