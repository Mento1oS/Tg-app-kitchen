/** @format */
import style from './SoloLanding.module.css'
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
import { motion } from 'framer-motion';
function SoloLanding(){
  return <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x:window.innerWidth}} className={style.container}>
    <div className={style.layers}>
      <div className={style.task}>
        Приготовь мне мясо по-французски
      </div>
      <div className={style.button}>
        <SubmitButton text={'Я готов'} address={'/solo/task'}/>
      </div>
    </div>
  </motion.div>;
}

export default SoloLanding;