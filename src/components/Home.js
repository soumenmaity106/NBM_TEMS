import React, { Component } from 'react';

//Components
import Featured from './Featured';
import Subscriptions from './Subscriptions';
import Block from './Block';
import Poll from './Poll';

//URL
const HOME_URL = 'http://localhost:3001/home';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            home: ''
        }
    }

    componentDidMount() {
        fetch(HOME_URL, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    home: json
                })
            })
    }
    render() {
        return (
            <div>
                <Featured slides={this.state.home.slider} />
                <Subscriptions />
                <Block blocks={this.state.home.blocks}/>
                <Poll />
            </div>
        );
    }
}

export default Home;