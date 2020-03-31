import React from 'react';
import './App.css';
// import SandClocks from './components/SandClocks';
import SandClocksSVG from './components/SandClocksSVG';
import SandClockSVG from './components/SandClockSVG';
import PieChart from './components/PieChart';
import SpeedometerChart from './components/SpeedometerChart';


function App () {
  return (
    <div className="App">
      {/* <SandClocks                  // на HTML
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 150 }}
        data2={{ date: '30.09.17', value: 165.6 }} /> */}
      <SandClocksSVG
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 151.6 }}
        data2={{ date: '30.09.17', value: 162.1 }} />

      <SandClockSVG value={0.65} height="100" width="60" />
      <PieChart startDegree={0} value={0.8} color={'url(#gradient)'} />
      <SpeedometerChart value={0.65} />
    </div>
  );
}

export default App;
