import React from 'react';
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
