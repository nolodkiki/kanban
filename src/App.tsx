import './App.css'
import { useEffect } from 'react';
import { Header } from './components/Header'
import { Board } from './components/Board'
import Sidebar from './components/Sidebar'
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { fetchInitialState } from './Redux/slices/dataSlice';
import { getCurrentBoard } from './Redux/slices/currentBoardSlice';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchInitialState())
  }, [dispatch]);

  const state = useAppSelector(state => state.data.data.boards)
  useEffect(() => {
    // Вызываем getCurrentBoard, когда state[0] обновляется
    if (state.length > 0) {
      dispatch(getCurrentBoard(state[0]));
    }
  }, [dispatch, state]);


  return (
    <div className='flex flex-col h-full'>
      <div className='fixed top-0 left-0 bottom-0'>
        <Sidebar />
      </div>
      <div className='fixed top-0 left-[300px] right-0 z-50'>
        <Header />
      </div>
      <div className='relative z-0 flex-1 ml-[330px] top-[125px]'>
        {state?.length === 0 ? 'Loading...' : <Board />}
      </div>
    </div >
  )
}

export default App
