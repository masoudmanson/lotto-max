import { useSelector } from 'react-redux';
import './App.css'
import Draw from './components/Draw';
import NumbersGrid from './components/NumbersGrid';
import PickedGrid from './components/PickedGrid';
import Result from './components/Result';
import { RootState } from './store/store';
import { Typography } from '@mui/material';

function App() {
  const winning = useSelector((state: RootState) => state.selection.winning);
  
  return (
    <>
      <Typography 
        component="h4" 
        variant="h4" 
        sx={{
          paddingBottom: 4, 
          color: "SteelBlue", 
          fontWeight: 600
        }}
      >
        Lotto Max Draft
      </Typography>
      
      <div id="lotto-max-wrapper">
        <NumbersGrid count={50}/>
        <div>
          <PickedGrid/>
          <Draw/>
          {winning.length ? <Result/> : null}
        </div>
      </div>
    </>
  )
}

export default App
