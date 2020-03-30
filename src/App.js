import React from 'react';
import './App.css';
// import SandClocks from './components/SandClocks';
import SandClocksSVG from './components/SandClocksSVG';
import SandClockSVG from './components/SandClockSVG';


function App () {
  return (
    <div className="App">
      {/* <SandClocks                  // на HTML
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 150 }}
        data2={{ date: '30.09.17', value: 165.6 }} /> */}
      <SandClocksSVG
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 140.6 }}
        data2={{ date: '30.09.17', value: 162.1 }} />
      <div className="SandClocksSVG">

        <SandClockSVG sendLevel={0.5} height="100" width="60"/>
      </div>
    </div>
  );
}

export default App; 
