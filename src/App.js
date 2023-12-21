import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { generateToken, messaging } from './notifications/firebase';

function App() {
  useEffect(() => {
    // generateToken()
    onMessage(messaging, (payload) => {
      console.log(payload);
    })
  }, []);


  const handleNotifyClick = async () => {
    // Request permission for notifications and generate token
    await generateToken();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Edit <code>src/App.js</code> and save to reload.
        </h6>
        <button id='notify' onClick={handleNotifyClick} > Notify </button>
        <p id='token' style={{fontSize: 13}}> </p>

      </header>
    </div>
  );
}

export default App;
