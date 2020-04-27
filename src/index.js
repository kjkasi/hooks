import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwithecr />
    </div>
  );
};

const HookSwithecr = () => {

  const [ color, setColor ] = useState('gray');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style= {{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
      Hellow World
      <button 
        onClick={() => {setColor('black')}} >
        Dark</button>
      <button 
        onClick={() => {setColor('white')}} >
        Light</button>
        <button 
          onClick={() => {setFontSize((s) => s + 1)}} >
          +
        </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
