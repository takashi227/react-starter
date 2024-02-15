import { useState } from "react"
import { AlertMessage, CardMessage } from "./Message2"

function Page2() {
    const [alert, setAlert] = useState("This is alert message!")
    const [card, setCard] = useState("This is card message!")

    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage alert={alert} setAlert={setAlert} />
                <CardMessage card={card} setCard={setCard} />
                <hr />
                <div className="text-right">
                    <p>{alert}</p>
                    <p>{card}</p>
                </div>
            </div>
        </div>
    )
}

export default Page2