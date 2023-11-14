import { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const DrumPad = ({ id, keyTrigger, src, onClick, power }) => {
  const audioRef = useRef(null);

  const playAudio = useCallback(() => {
    if (power && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      onClick(keyTrigger);

      // Agrega la clase para la iluminación momentánea
      const padElement = document.getElementById(id);
      padElement.classList.add('iluminate');

      // Elimina la clase después de 300 milisegundos (ajusta según sea necesario)
      setTimeout(() => {
        padElement.classList.remove('iluminate');
      }, 300);
    }
  }, [audioRef, id, keyTrigger, onClick, power]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === keyTrigger) {
        playAudio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyTrigger, playAudio]);

  return (
    <div className="drum-pad" id={id} onClick={playAudio}>
      {keyTrigger}
      <audio ref={audioRef} id={keyTrigger} src={src}></audio>
    </div>
  );
};

DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  keyTrigger: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
};

export default DrumPad;
