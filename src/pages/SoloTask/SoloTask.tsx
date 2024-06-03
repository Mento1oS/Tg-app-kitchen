/** @format */
import { motion } from "framer-motion";
import style from "../SoloTask/SoloTask.module.css";
import SubmitButton from "../SubmitButton/SubmitButton.tsx";

const SoloTask = () => {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.container}>
        <div className={style.image}>
            <img className={style.image} src="/centre_third.svg" alt="grapes"/>
        </div>
        <div className={style.header}>Тебе необходимо выбрать
            правильные ингредиенты для блюда, которое попросил шеф
        </div>
        <div className={style.description}>Чем больше правильных продуктов ты выберешь, тем выше будет твой рейтинг
        </div>
        <div className={style.button}>
            <SubmitButton text={'Начать'} address={'/solo/game'}/>
        </div>
    </motion.div>;
};

export default SoloTask;
