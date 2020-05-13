import React from 'react';
import Header from 'Components/Common/Header'
import Footer from 'Components/Common/Footer'
import Home from 'Components/Layout/home'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'Routes/'



import './App.scss';


function App() {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {
                        routes.map(route => {
                            return (<Route exact key={route.path} {...route} />)
                        })
                    }
                    <Redirect to="/404" />
                </Switch>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
