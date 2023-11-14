import { useState } from 'react';
import DrumPad from './components/DrumPad';

const Home = () => {
    const [display, setDisplay] = useState('');

    const playAudio = (key) => {
        const audio = document.getElementById(key);
        audio.currentTime = 0;
        audio.play();
        setDisplay(key);
    };

    return (
        <div id="drum-machine">
            <div id="display">{display}</div>
            <div className="drum-pads">
              <button type='button' className='power'><i className="fa-solid fa-power-off"></i></button>
                <div>
                <DrumPad id="Q" keyTrigger="Q" src="/sounds/Heater-1.mp3" onClick={playAudio} />
                <DrumPad id="W" keyTrigger="W" src="/sounds/Heater-2.mp3" onClick={playAudio} />
                <DrumPad id="E" keyTrigger="E" src="/sounds/Heater-3.mp3" onClick={playAudio} />
                </div>
                <div>
                <DrumPad id="A" keyTrigger="A" src="/sounds/Heater-4_1.mp3" onClick={playAudio} />
                <DrumPad id="S" keyTrigger="S" src="/sounds/Heater-6.mp3" onClick={playAudio} />
                <DrumPad id="D" keyTrigger="D" src="/sounds/Dsc_Oh.mp3" onClick={playAudio} />
                </div>
                <div>
                <DrumPad id="Z" keyTrigger="Z" src="/sounds/Kick_n_Hat.mp3" onClick={playAudio} />
                <DrumPad id="X" keyTrigger="X" src="/sounds/RP4_KICK_1.mp3" onClick={playAudio} />
                <DrumPad id="C" keyTrigger="C" src="/sounds/Cev_H2.mp3" onClick={playAudio} />
                </div>
            </div>
        </div>
    );
};

export default Home;
