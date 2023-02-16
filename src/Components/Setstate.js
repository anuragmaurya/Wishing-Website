import React, { Component } from "react";

class Change extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }

    Subscribe() {
        this.setState({
            message: 'Thankyou for Subscribing'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.Subscribe()}>Subscribe</button>
            </>
        )
    }
}

export default Change;