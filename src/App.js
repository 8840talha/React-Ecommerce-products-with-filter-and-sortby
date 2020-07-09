import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/Products';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <ProductList/>
      </div>
    );
  }
}

export default App;
