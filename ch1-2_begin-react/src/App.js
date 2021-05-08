import React from 'react';
import Hello from './Hello';
import './App.css'

function App() {
  const name = 'react';
  const style = {
    background: 'pink',
    color: 'black',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      { /* 이건 안보인다구 */ }
      /* 이건 보인다구 */
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
