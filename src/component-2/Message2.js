import { useState } from "react"

export function AlertMessage(props) {
    const data = ["Hello!", "Welcome...", "Good-bye?"]

    const actionAlert = () => {
        const re = data[Math.floor(Math.random() * data.length)]
        props.setAlert('message: "' + re + '".')
    }

    return (
        <div className="alert alert-primary h5 text-primary">
            <h5>{props.alert}</h5>
            <button onClick={actionAlert} className="btn btn-primary">Click me!</button>
        </div>
    )
}

export function CardMessage(props) {
    const [count, setCount] = useState(0)

    const actionCard = () => {
        setCount(count + 1)
        props.setCard("card counter: " + count + " count.")
    }

    return (
        <div className="card p-3 border-dark text-center">
            <h5>{props.card}</h5>
            <button onClick={actionCard} className="btn btn-secondary">Click me!</button>
        </div>
    )
}