// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Product">Product</Link>
                    <hr />
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/product" component={Product}></Route>
                </div>
            </Router>
        );
    }
}

export default App;