import React from 'react';
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import routes from './routes'


function App() {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        return (<Route key={route.path} {...route} />)
                    })
                }
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
