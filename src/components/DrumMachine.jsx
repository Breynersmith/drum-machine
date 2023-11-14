import  { useState } from 'react';
import DrumPad from './components/DrumPad';

function DrumMachine() {
  const [display, setDisplay] = useState('');
  const [mute, setMute] = useState(false); // Agregamos estado para silenciar o no los pads

  const updateDisplay = (key) => {
    setDisplay(key);
  };

  const toggleMute = () => {
    setMute(!mute);
    setDisplay(''); // Reiniciar el display al silenciar
  };

  const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <button id="mute-button" onClick={toggleMute}>
        {mute ? 'Unmute' : 'Mute'}
      </button>
      {drumPads.map((drumPadKey) => (
        <DrumPad
          key={drumPadKey}
          id={drumPadKey + '-drum'}
          keyTrigger={drumPadKey}
          onClick={updateDisplay}
          muted={mute} // Pasamos el estado "muted" a cada DrumPad
        />
      ))}
    </div>
  );
}

export default DrumMachine;
