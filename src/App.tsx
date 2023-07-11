import './App.css'
import { Header } from './components/Header'
import { Board } from './components/Board'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex flex-col h-full'>
      <div className='fixed top-0 left-0 bottom-0'>
        <Sidebar />
      </div>
      <div className='fixed top-0 left-[300px] right-0'>
        <Header />
      </div>
      <div className='relative z-0 flex-1 ml-[320px] top-[125px]'>
        <Board />
      </div>
    </div >
  )
}

export default App
