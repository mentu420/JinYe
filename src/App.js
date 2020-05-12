import React from 'react';
import Header from './components/common/header'
import Footer from './components/common/footer'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes'



import './App.scss';


function App() {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    {
                        routes.map(route => {
                            return (<Route exact key={route.path} {...route} />)
                        })
                    }
                    {/* <Redirect to="/404" /> */}
                </Switch>
                <Redirect path="/" to="/home" />
            </Router>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
