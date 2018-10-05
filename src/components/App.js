import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Teams from './teams'
import Team from './Team'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route exact path="/teams" component={Teams}></Route>
                <Route exact path="/team/:id"  component={Team}></Route>
                <Footer/>
            </div>
            
            </BrowserRouter>
        );
    }
}

export default App;