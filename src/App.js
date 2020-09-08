import React from 'react';
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import Home from 'components/layout/home'
import { HashRouter, Route, Switch, Redirect,IndexRoute } from 'react-router-dom';
import { routes } from 'routes/'
import ScrollToTop from 'components/common/scrollToTop'
import AsideContact from 'components/common/asideContact/'
import 'assets/iconfont/iconfont.scss'
import './App.scss';


function App() {

    return (
        <div id="app">
            <HashRouter >
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
                <AsideContact />
                <Footer></Footer>
            </HashRouter>
        </div>
    );
}

export default App;
