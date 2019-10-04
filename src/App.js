import React, {Component} from 'react';
import './App.css';
import Module from './emscripten/emscriptenmodule';

class App extends Component {

  async componentDidMount(){

    var moduleParam = {
      canvas: this.refs.renderwindow
    };

    const renderingModule = Module(moduleParam);
    console.log(renderingModule);

    // console.log(Module)    
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
