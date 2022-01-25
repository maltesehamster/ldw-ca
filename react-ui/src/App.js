import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderView from './HeaderView/HeaderView'
import UserView from './UserView/UserView'
import TransactionView from './TransactionView/TransactionView';
import ErrorView from './ErrorView/ErrorView'
import LoadingView from './LoadingView/LoadingView'
import Logger from './Logger'

import '@csstools/normalize.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            transactions: [],
            menuOptions: [
                { url: "transactions", label: "Transactions" },
                { url: "users", label: "Users" }
            ],
            errorMessage: "",
            isLoading: false
        };
    }

    static getDerivedStateFromError(error) {    
        return { errorMessage: error };  
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingView />;
        }
        if (this.state.errorMessage) {
            return <ErrorView errorMessage={this.state.errorMessage} />;
        }
        return (
            <Router>
                <HeaderView menuOptions={this.state.menuOptions} />  
                <div className='page-container'>
                    <Switch>
                        <Route exact path='/transactions' component={TransactionView} /> 
                        <Route exact path='/users' component={UserView} /> 
                    </Switch>         
                </div>    
            </Router>
        );
    }

    componentDidCatch(error, info) {       
        Logger.error(error, info.componentStack);  
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/users')
            .then(response => { 
                if (!response.ok) {
                    throw new Error(response.status + " " + response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(users => this.setState({ users: users, isLoading: false }))
            .catch(err => this.setState({ errorMessage: err.message, isLoading: false }));
    }
}

export default App;
