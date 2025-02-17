/** @format */
import style from './Main.module.css'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
const Main = () => {
    return <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x:-window.innerWidth, transition:{duration:0.1}}} className={style.container}>
        <h1 className={style.header}>
            Выберите режим игры
        </h1>
        <div className={style.modes}>
            <Link className={style.link} to={'/solo'}>
                <div className={style.mode}>
                    <img src="/reciepts.png" className={style.mode_pic} alt="reciepts"/>
                </div>
            </Link>
            <Link className={style.link} to={'/solo'}>
                <div className={style.mode}>
                    <img src="/duels.png" className={style.mode_pic} alt="duels"/>
                </div>
            </Link>
            <Link className={style.link} to={'/solo'}>
                <div className={style.mode}>
                    <img src="/rating.png" className={style.mode_pic} alt="rating"/>
                </div>
            </Link>
            <Link className={style.link} to={'/solo'}>
                <div className={style.mode}>
                    <img src="/ur_kitchen.png" className={style.mode_pic} alt="ur_kitchen"/>
                </div>
            </Link>
        </div>
    </motion.div>;
}

export default Main;
