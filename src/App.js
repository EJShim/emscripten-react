import React, {Component} from 'react';
import './App.css';
import es2pipeline from './emscripten/es2pipeline';
import es3pipeline from './emscripten/es3pipeline';

class App extends Component {

  componentDidMount(){

    const renderWindow = this.refs.renderwindow;
    var moduleParam = {
      canvas: renderWindow
    };

    es3pipeline(moduleParam).then(pipeline=>{    
      // //add event
      // renderWindow.addEventListener('click',e=>{
      //   pipeline._toggle_background_color();
      // } );
      
      
      // window.addEventListener('resize',e=>{

      //   pipeline._handleResize(window.innerWidth, window.innerHeight);
      // });


      // const gl = renderWindow.getContext("webgl");
      // console.log(gl.getParameter(gl.VERSION));
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
