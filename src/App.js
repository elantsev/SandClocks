import React from 'react';
import './App.css';
// import SandClocks from './components/SandClocks';
import SandClocksSVG from './components/SandClocksSVG';
import SandClockSVG from './components/SandClockSVG';
import PieChart from './components/PieChart';
import Tachometer from './components/Tachometer';
import Tachometer3 from './components/Tachometer3';
import DonutChart3 from './components/DonutChart3';


function App () {
  return (
    <div className="App">
      {/* <SandClocks                  // на HTML
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 150 }}
        data2={{ date: '30.09.17', value: 165.6 }} /> */}
      {/* <SandClocksSVG shift={0} className="item"
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 164 }}
        data2={{ date: '30.09.17', value: 170 }} />
      <SandClocksSVG shift={500}
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 140.5 }}
        data2={{ date: '30.09.17', value: 169.5 }} />
      <SandClocksSVG shift={1000}
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 142.6 }}
        data2={{ date: '30.09.17', value: 140.1 }} />
      <SandClocksSVG shift={500}
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 140.6 }}
        data2={{ date: '30.09.17', value: 142.1 }} /> */}

      {/* <SandClockSVG value={0.65} height="100" width="60" /> */}
      <PieChart startDegree={0} value={0.85} color={'url(#gradient)'} />
      <Tachometer value={0.85} />
      <Tachometer3 value1={0.33} value2={0.35} value3={0.45} text={263.5} units={['₽', 'млрд']} />
      <DonutChart3 startDegree={60} value1={0.65} value2={0.7} value3={0.85} text={"3263.5"} units={['₽', 'млрд']} />
    </div>
  );
}

export default App;
