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
                    <img src="/reciepts.png" alt="reciepts"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="/duels.png" alt="duels"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="/rating.png" alt="rating"/>
                </div>
            </Link>
            <Link to={'/solo'}>
                <div className={style.mode}>
                    <img src="/ur_kitchen.png" alt="ur_kitchen"/>
                </div>
            </Link>
        </div>
    </div>
        ;
};

export default Main;
