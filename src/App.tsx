import React from 'react';
import './App.css';
// import CounterWithClass from './components/CounterWithClassComponent';
import CounterWithFuncCompoent from './components/CounterWithFuncComponent';

function App() {
  return (
    <div className="App border border-purple-500 p-10 m-10">
      <h1 className='text-2xl font-semibold mb-2'>React app</h1>
      <p className='mb-4 text-left'>Value of counter: 0</p>
      {/* <CounterWithClass /> */}
      <CounterWithFuncCompoent />
    </div>
  );
}

export default App;
