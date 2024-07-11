import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import ItemsList from './Components/ItemsList';
// import Login from './Components/auth/login';
// import Register from './Components/auth/register';
// import LatestArticles from './Components/LatestArticles';
// import NewsletterSignup from './Components/NewsletterSignup';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <div className="App-header">
            <h1>Welcome to the THEPublive News.</h1>
          </div>
          <main>
              <ItemsList/>
            </main>
          <Footer />
        </div>
    );
  }
}

export default App;


