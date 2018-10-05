import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props) {
        super(props)


        this.state = {
            email: '',
            error: false,
            success: false,
        }
    }
    onchangeFunc = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    sevSubscription = (email) => {
        const URL_EMAIL = `http://localhost:3001/subcriptions`;
        fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(res => res.json)
            .then(() => {
                this.setState({
                    email: '',
                    success: true
                })
            })

    }

    clearMessages() {
        setTimeout(function () {
            this.setState({
                error: false,
                success: false
            })
        }.bind(this), 3000)
    }

    handelSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;

        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.sevSubscription(email)
        } else {
            this.setState({ error: true })
        }

        this.clearMessages()
    }
    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe US</h3>
                <div>
                    <form onSubmit={this.handelSubmit}>
                        <input type="text"
                            placeholder="Youremail@gmail.com"
                            value={this.state.email}
                            onChange={this.onchangeFunc}
                        />
                    </form>
                    <div className={this.state.error ? "error show" : "error"}>Check Your Email</div>
                    <div className={this.state.success ? "success show" : "success"}>Thank You</div>
                </div>
                <small>Lorem ipsone doller site Emait</small>
            </div>
        );
    }
}

export default Subscriptions;