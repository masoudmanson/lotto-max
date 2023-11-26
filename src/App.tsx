import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Draw from './components/Draw';
import NumbersGrid from './components/NumbersGrid';
import PickedGrid from './components/PickedGrid';
import Result from './components/Result';
import { RootState } from './store/store';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { autoPick, draw, reset } from './store/selectionSlice';

function App() {
  const dispatch = useDispatch();
  const winning = useSelector((state: RootState) => state.selection.winning);

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

  return (
    <>
      <div id="header">
        <Typography
          component="h4"
          variant="h4"
          sx={{
            paddingBottom: 4,
            color: "SteelBlue",
            fontWeight: 600
          }}
        >
          Lotto Mim
        </Typography>
      </div>

      <div id="lotto-max-wrapper">
        <NumbersGrid count={50} />
        <div>
          <PickedGrid />
          <Draw />
          {winning.length ? <Result /> : null}
        </div>
      </div>
    </>
  )
}

export default App
