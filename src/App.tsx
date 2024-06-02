/** @format */

import "./App.css";
import {useEffect} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const telegram = window.Telegram.WebApp;

function App() {
  useEffect(()=>{
    telegram.ready();
  },[])

  // const onClose = ()=>{
  //   telegram.close();
  // }

  return <div></div>;
}

export default App;
