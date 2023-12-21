import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { generateToken, messaging } from './notifications/firebase';

function App() {
  useEffect(() => {
    generateToken()
    onMessage(messaging, (payload) => {
      console.log(payload);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Edit <code>src/App.js</code> and save to reload.
        </h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>

        <p id='token' style={{fontSize: 13}}> </p>

      </header>
    </div>
  );
}

export default App;
