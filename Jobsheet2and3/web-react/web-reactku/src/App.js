import logo from './logo.svg';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Aufa'/>
      </div>
    );
  }
}

export default App;