import React from 'react';
import './App.css';
import SandClocks from './components/SandClocks';


function App () {
  return (
    <div className="App">
      <SandClocks
        scale={[140, 150, 160, 170]}
        data1={{ date: '31.12.16', value: 150 }}
        data2={{ date: '30.09.17', value: 165.6 }} />
    </div>
  );
}

export default App;
