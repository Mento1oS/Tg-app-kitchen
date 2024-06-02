/** @format */

import "./App.css";
import {useEffect} from "react";
import useTelegram from "./utils/useTelegram.ts";
import Header from "./pages/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import SoloLanding from "./pages/SoloLanding/SoloLanding.tsx";
import SoloTask from "./pages/SoloTask/SoloTask.tsx";
import SoloWaitingRoom from "./pages/SoloWaitingRoom/SoloWaitingRoom.tsx";
import SoloInGamePage from "./pages/SoloInGamePage/SoloInGamePage.tsx";

function App() {
  const telegram = useTelegram()
  useEffect(()=>{
    telegram.ready();
  },[])

  // const onClose = ()=>{
  //   telegram.close();
  // }

  return <div className='app'>
    <Header/>
    <Routes>
      <Route index element={<Main/>}/>
      <Route path='/solo' element={<SoloLanding/>}/>
      <Route path='/solo/task' element={<SoloTask/>}/>
      <Route path='/solo/game' element={<SoloWaitingRoom/>}/>
      <Route path='/solo/game/:id' element={<SoloInGamePage/>}/>
    </Routes>
  </div>;
}

export default App;
