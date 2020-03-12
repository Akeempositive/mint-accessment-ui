import React, {Component} from 'react';
import './App.css';
import {Route, withRouter,HashRouter} from 'react-router-dom';
import VerifyCardPage from './pages/verify-card';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isLoading: false
        };
    }

    render() {

        return (

            <HashRouter>
                <Route exact path='/' component={VerifyCardPage} />
                <Route exact path="/verify-card" component={VerifyCardPage} />
            </HashRouter>
        );
    }
}

export default withRouter(App);
