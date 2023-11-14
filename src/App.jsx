import { useState } from 'react';
import DrumPad from './components/DrumPad';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const [display, setDisplay] = useState('');
    const [power, setPower] = useState(true);

    const handlePower = () => {
        setPower(!power);

    }

    const playAudio = (key) => {
      if (power) {
        const audio = document.getElementById(key);
        audio.currentTime = 0;
        audio.play();
        setDisplay(key);
    }
        
    };

    return (
        <div>
  <Header />
  <div className='all-content'>
    <div id="drum-machine">

      <div id="display">{display}</div>
      <button type='button' className='power' onClick={handlePower}>
          <i className="fa-solid fa-power-off" style={{color: power ? 'green' : 'red'}}></i>
        </button>
      <div className="drum-pads">
        
        <div className={power ? 'active' : ''}>
          <DrumPad id="Q" keyTrigger="Q" src="/sounds/Heater-1.mp3" onClick={playAudio} power={power} />
          <DrumPad id="W" keyTrigger="W" src="/sounds/Heater-2.mp3" onClick={playAudio} power={power} />
          <DrumPad id="E" keyTrigger="E" src="/sounds/Heater-3.mp3" onClick={playAudio} power={power} />
        </div>
        <div className={power ? 'active' : ''}>
          <DrumPad id="A" keyTrigger="A" src="/sounds/Heater-4_1.mp3" onClick={playAudio} power={power} />
          <DrumPad id="S" keyTrigger="S" src="/sounds/Heater-6.mp3" onClick={playAudio} power={power} />
          <DrumPad id="D" keyTrigger="D" src="/sounds/Dsc_Oh.mp3" onClick={playAudio} power={power} />
        </div>
        <div className={power ? 'active' : ''}>
          <DrumPad id="Z" keyTrigger="Z" src="/sounds/Kick_n_Hat.mp3" onClick={playAudio} power={power} />
          <DrumPad id="X" keyTrigger="X" src="/sounds/RP4_KICK_1.mp3" onClick={playAudio} power={power} />
          <DrumPad id="C" keyTrigger="C" src="/sounds/Cev_H2.mp3" onClick={playAudio}  power={power}/>
        </div>
      </div>
      <p id="power-status">
        <span id='on' style={{color: power ? 'green' : 'gray'}}>
        Encendido 
        </span> 
        <span id='off' style={{color: power ? 'gray' : 'red'}}> 
        Apagado
        </span>  
      </p>
    </div>
    
  </div>
  <Footer />
</div>
    );
};

export default App;
