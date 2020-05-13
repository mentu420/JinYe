import React from 'react';
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from 'routes'
import Home from 'pages/home'



import './App.scss';


function App() {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
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
