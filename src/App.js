import React, {Component} from 'react';
import './App.css';
import openglRenderingPipeline from './emscripten/openglRendering';

class App extends Component {

  componentDidMount(){

    const renderWindow = this.refs.renderwindow;
    var moduleParam = {
      canvas: renderWindow
    };

    openglRenderingPipeline(moduleParam).then(pipeline=>{    
      //add event
      renderWindow.addEventListener('click',e=>{
        pipeline._toggle_background_color();
      } );
      
      
      window.addEventListener('resize',e=>{

        pipeline._handleResize(window.innerWidth, window.innerHeight);
      })
    })



    
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
