import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componants/Counter'
import TodoList from './componants/TodoList'
import SerchList from './componants/SerchList'
import App1 from './componants/accordion/App1'
import App2 from './componants/Tabscomp.jsx/App2'
import DebounceSearch from './componants/DebounceSearch'
import Starrating from './componants/Starrating'
import VirtualScrollList from './componants/VirtualScrollList'
import DragDropList from './componants/DragDropList'
import TrafficLight from './componants/TrafficLight'
import Tab from './componants/Tab_form/Tab'
import Paggination from './componants/Paggination/PAggination'

function App() {
  

  return (
    <>
      {/* <Counter/>
      <TodoList/> */}
      {/* <SerchList/> */}
      {/* <App1/> */}
      {/* <App2/> */}
      {/* <DebounceSearch/> */}
      {/* <Starrating/> */}
      {/* <VirtualScrollList/> */}
      {/* <DragDropList/> */}
      {/* <TrafficLight/> */}
      {/* <Tab/> */}
      <Paggination/>
    </>
  )
}

export default App
