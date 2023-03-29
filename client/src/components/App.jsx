// import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Button from './Button';
import Input from './Input';
import Card from './Card';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar className="navbarHeader" text="testing"/>
      <Card />
      <Button />
      <Input />
      <Header />
    </div>
  );
}

export default App;
