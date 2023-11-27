import { useDispatch } from 'react-redux';
import './App.css'
import { useEffect } from 'react';
import { autoPick, draw, reset } from './store/selectionSlice';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import { Engine } from 'tsparticles-engine';
import LottoMax from './components/LottoMax';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "a":
          dispatch(autoPick());
          break;

        case "d":
          dispatch(draw());
          break;

        case "s":
          dispatch(reset());
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [dispatch]);

  const particlesInit = async (main: Engine) => {
    await loadFull(main); 
  }; 

  return (
    <>
    <Particles 
        id="tsparticles" 
        init={particlesInit} 
        options={{ 
          background: { 
            color: "#23177b", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.4, 
            }, 
            color: { 
              value: "#fff", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 800, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0, 
                speed: 3, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      /> 
      <LottoMax />
    </>
  )
}

export default App
