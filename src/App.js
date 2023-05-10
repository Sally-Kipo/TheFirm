import './App.css';
import Classprops from './Classprops';
import React from 'react';

class App extends React.Component {
  render() {
    return <div>
      <Classprops name='salome1' place="placex" />
      <Classprops name='salome2' place="placez" />
      <Classprops name='salome3' place="placey" />
      <header />
    </div>
  }
}

export default App;
