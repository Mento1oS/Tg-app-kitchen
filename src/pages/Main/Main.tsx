/** @format */
import style from './Main.module.css'
import {Link} from "react-router-dom";

const Main = () => {
    return <div className={style.container}>
        <h1 className={style.header}>
            Выберите режим игры
        </h1>
        <div className={style.modes}>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="./public/reciepts.png" alt="reciepts"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="./public/duels.png" alt="duels"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="./public/rating.png" alt="rating"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="./public/ur_kitchen.png" alt="ur_kitchen"/>
                </div>
            </Link>
        </div>
    </div>
        ;
};

export default Main;
