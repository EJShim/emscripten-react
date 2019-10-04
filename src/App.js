import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Module } from 'module';

class App extends Component {

  componentDidMount(){
    console.log(this.refs.renderwindow)
  }

  render(){
    return (
      <div className="App">
        <canvas className="App-renderwindow" ref="renderwindow"/>
      </div>
    );
  }
  
}

export default App;
