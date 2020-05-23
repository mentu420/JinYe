import React from 'react';
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import Home from 'components/layout/home'
import { HashRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import { routes } from 'routes/'
import ScrollToTop from 'components/common/scrollToTop'

import 'assets/iconfont/iconfont.scss'
import './App.scss';


function App() {

    return (
        <div id="app">
            <Router>
                <Header></Header>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {
                            routes.map(route => {
                                return (<Route exact key={route.path} {...route} />)
                            })
                        }
                        <Redirect to="/404" />
                    </Switch>
                </ScrollToTop>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
