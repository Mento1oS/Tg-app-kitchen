/** @format */
import style from './SoloLanding.module.css'
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
function SoloLanding(){
  return <div className={style.container}>
    <div className={style.layers}>
      <div className={style.task}>
        Приготовь мне мясо по-французски
      </div>
      <div className={style.button}>
        <SubmitButton text={'Я готов'} address={'/solo/game'}/>
      </div>
    </div>
  </div>;
}

export default SoloLanding;