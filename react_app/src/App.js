import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Login from './Components/auth/login';
// import Register from './Components/auth/register';
import LatestArticles from './Components/LatestArticles';
import NewsletterSignup from './Components/NewsletterSignup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="App-header">
            <h1>Welcome to the THEPublive News.</h1>
            
          <Routes>
            <Route path="/login" component={Login} />
            {/* <Route path="/" exact component={HomePage} /> */}
          </Routes>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <h2>Welcome to React</h2> */}

            <LatestArticles/>
            <NewsletterSignup/>
          </div>
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


