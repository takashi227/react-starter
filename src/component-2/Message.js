export function AlertMessage(props) {
    return (
        <div className="alert alert-primary h5 text-primary">
            {props.message}
        </div>
    )
}

export function CardMessage(props) {
    return (
        <div className="card p-3 h5 border-primary text-center">
            {props.message}
        </div>
    )
}