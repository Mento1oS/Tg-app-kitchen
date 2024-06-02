/** @format */
import style from './SoloWaitingRoom.module.css'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import DishPicture from "../DishPicture/DishPicture.tsx";
import {useNavigate} from "react-router-dom";

const SoloWaitingRoom = () => {
    const [counter, setCounter]: [counter: number, useCounter: Dispatch<SetStateAction<number>>] = useState(3);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter - 1);
            // if(counter<=0){
            //   navigate('/solo/game/1');
            // }
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);
    return <div className={style.container}>
        <div className={style.picture}>
            <DishPicture picture={'/dish_picture.png'}/>
        </div>
        <div className={style.header}>до старта</div>
        <div className={String(style.counter)}>{counter}</div>
    </div>;
};

export default SoloWaitingRoom;
