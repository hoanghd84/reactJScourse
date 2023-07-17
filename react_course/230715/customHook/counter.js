import React from "react"

const useIncreament = (addAmount) => {
    const [result, setResult] = React.useState(0)

    const increase = () => {
        setResult(result+addAmount);
    }

    return [result, increase]
}

export default useIncreament
