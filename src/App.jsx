import React from "react"
import "./App.css"
import "./index.css"
import { v4 as uuidv4 } from "uuid"
import Button from "./components/Button"

function App() {
    const buttons = [
        ["AC", "+/-", "%", "/"],
        [7, 8, 9, "x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ]

    return (
        <div className="wrapper">
            <div className="display">
                <div className="buttonBox">
                    {buttons.flat().map((bt) => (
                        <Button value={bt} key={uuidv4()} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
