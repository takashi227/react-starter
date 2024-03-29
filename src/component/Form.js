import { Component } from "react";

class Form extends Component {
    input = ''

    constructor(props) {
        super(props)
        this.state = {
            title: 'input form',
            message: 'type your name',
        }
        this.doChange = this.doChange.bind(this)
        this.doSubmit = this.doSubmit.bind(this)
    }

    doChange(event) {
        this.input = event.target.value
    }

    doSubmit(event) {
        this.setState({
            title: 'send form',
            message: 'Hello, ' + this.input + '!!',
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <p className="card h5 p-3">{this.state.message}</p>
                <div className="alert alert-primary mt-3">
                    <form onSubmit={this.doSubmit}>
                        <div className="form-group">
                            <label>Message:</label>
                            <input type="text" className="form-control" onChange={this.doChange} />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Click" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form