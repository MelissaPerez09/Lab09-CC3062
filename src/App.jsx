import React, { useState } from "react"
import { evaluate } from "mathjs"
import "./App.css"
import "./index.css"
import "./components/Button.css"

function App() {
    const [result, setResult] = useState("")

    const handleChange = (e) => {
        setResult(e.target.value)
    }

    const clear = () => {
        setResult("")
    }

    const operation = (operations) => {
        setResult((prevResult) => `${prevResult}${operations}`)
    }

    const negative = () => {
        if (result.length < 9) {
            setResult((prevResult) => parseFloat(prevResult) * -1)
        }
    }

    const input = (e) => {
        const number = e.target.innerText
        if (result.length < 9 && parseInt(result + number, 10) <= 999999999) {
            setResult(result + number)
        }
    }

    const calculate = () => {
        try {
            const calculatedResult = evaluate(result).toString()

            if (calculatedResult.length > 9) {
                setResult(calculatedResult.slice(0, 9))
            } else {
                setResult(calculatedResult)
            }
        } catch (error) {
            setResult("ERROR")
        }
    }

    return (
        <div className="wrapper">
            <input className="display" value={result} onChange={handleChange} />
            <div className="buttonBox">
                <button type="button" className="op" onClick={clear}>
                    AC
                </button>
                <button type="button" className="op" onClick={negative}>
                    +/-
                </button>
                <button
                    type="button"
                    className="op"
                    onClick={() => operation("%")}
                >
                    %
                </button>
                <button
                    type="button"
                    className="op"
                    onClick={() => operation("/")}
                >
                    /
                </button>

                <button type="button" className="button" onClick={input}>
                    7
                </button>
                <button type="button" className="button" onClick={input}>
                    8
                </button>
                <button type="button" className="button" onClick={input}>
                    9
                </button>
                <button
                    type="button"
                    className="op"
                    onClick={() => operation("*")}
                >
                    x
                </button>

                <button type="button" className="button" onClick={input}>
                    4
                </button>
                <button type="button" className="button" onClick={input}>
                    5
                </button>
                <button type="button" className="button" onClick={input}>
                    6
                </button>
                <button
                    type="button"
                    className="op"
                    onClick={() => operation("-")}
                >
                    -
                </button>

                <button type="button" className="button" onClick={input}>
                    1
                </button>
                <button type="button" className="button" onClick={input}>
                    2
                </button>
                <button type="button" className="button" onClick={input}>
                    3
                </button>
                <button
                    type="button"
                    className="op"
                    onClick={() => operation("+")}
                >
                    +
                </button>
                <button type="button" className="button" onClick={input}>
                    0
                </button>
                <button type="button" className="button" onClick={input}>
                    .
                </button>
                <button
                    type="button"
                    className="equal"
                    onClick={calculate}
                >
                    =
                </button>
            </div>
        </div>
    )
}

export default App
