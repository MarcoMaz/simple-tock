import './App.scss';
import { useState } from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Route2 from './routes/route2';
// import MainView from './routes/main';

function App() {
  const fib = 12;

  const myWorker = new Worker('worker.js');

  const [messageBack, setMessageBack] = useState('');

  const handleClick = () => {
    myWorker.postMessage(fib);
  };

  myWorker.onmessage = (e) => {
    // eslint-disable-next-line no-console
    console.log('message received from worker = ', e.data);
    setMessageBack(e.data);
  };

  return (
    <div className="App">
      this is a test
      <br />
      <button type="button" onClick={handleClick}>
        send
      </button>
      <p>{messageBack}</p>
      {/* <BrowserRouter>

      <Routes>
        <Route path="/main" element={<MainView/>} />
        <Route path="/route2" element={<Route2/>} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
