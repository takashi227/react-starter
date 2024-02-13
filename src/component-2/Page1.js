import { useState } from "react";
import { AlertMessage, CardMessage } from "./Message";

function Page1() {
    const [msg, setMsg] = useState("This is sample message!")

    const doAction = () => {
        let res = window.prompt('type your name:')
        setMsg("Hello, " + res + "!!")
    }

    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage message={msg} />
                <CardMessage message={msg} />
                <div className="text-center">
                    <button onClick={doAction} className="btn btn-primary">Click me!</button>
                </div>
            </div>
        </div>
    )
}

export default Page1