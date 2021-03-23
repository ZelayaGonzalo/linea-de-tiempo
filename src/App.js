import { useEffect } from 'react';
import './App.css';
import Timeline from './components/Timeline'



function App() {
  useEffect(()=>{
    (function() {
      function scrollHorizontally(e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          document.getElementById('App').scrollLeft -= (delta * 60); // Multiplied by 40
          e.preventDefault();
      }
      if (document.getElementById('App').addEventListener) {
          // IE9, Chrome, Safari, Opera
          document.getElementById('App').addEventListener('mousewheel', scrollHorizontally, false);
          // Firefox
          document.getElementById('App').addEventListener('DOMMouseScroll', scrollHorizontally, false);
      } else {
          // IE 6/7/8
          document.getElementById('App').attachEvent('onmousewheel', scrollHorizontally);
      }
    })();
  },[])
  return (
    <div id='App' className="App">
      <Timeline/>
      <p className="firma">Zelaya Fernanda</p>
    </div>
  );
}

export default App;
