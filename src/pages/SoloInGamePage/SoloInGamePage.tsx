/** @format */
// import {Params, useParams} from "react-router-dom";
import style from './SoloIngamePage.module.css'
import IngredientComponent from "../IngredientComponent/IngredientComponent.tsx";
import ApprovePicture from "../ApprovePicture/ApprovePicture.tsx";
import {Dispatch, SetStateAction, useEffect, useRef, useState, TouchEvent} from "react";
import {Params, useNavigate, useParams} from "react-router-dom";
import { motion } from 'framer-motion';

const SoloInGamePage = (props: {
    answers: NonNullable<unknown>, setAnswers:Dispatch<SetStateAction<NonNullable<unknown>>>
}) => {
    const params: Readonly<Params<string>> = useParams();
    const navigate = useNavigate();
    const [timer, setTimer]:[number, Dispatch<SetStateAction<number>>] = useState(30);
    const [sign, setSign]:[number, Dispatch<SetStateAction<number>>] = useState(1);
    const stage = params?.stage;
    const interval = useRef(0);

    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const checkDirection = ()=>{
        if(touchStart.current > 20 + touchEnd.current){
            disapproveFunc();
        }
        else if(touchEnd.current > 20 + touchStart.current){
            approveFunc();
        }
    }

    const touchStartHandle = (e: TouchEvent):void => {
        touchStart.current = e.touches[0].screenX;
    }
    const touchEndHandle = (e: TouchEvent):void=> {
        touchEnd.current = e.changedTouches[0].screenX;
        checkDirection();
    };

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer(timer - 1);
            if(timer<=0){
                disapproveFunc();
            }
        }, 1000);
        return () => clearInterval(interval.current);
    }, [timer]);

    if(!stage) return;

    const onClick = (approved: boolean, answers: NonNullable<unknown>, setAnswers:Dispatch<SetStateAction<NonNullable<unknown>>>, stage:string) => {
        setAnswers({...answers, [stage]: approved});
        setSign(approved?1:-1);
        setTimer(30);
        navigate(`/solo/game/${Number(stage)+1}`)
    }

    const disapproveFunc = onClick.bind(null, false, props.answers, props.setAnswers, stage);
    const approveFunc = onClick.bind(null, true, props.answers, props.setAnswers, stage);

    return <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x: sign * window.innerWidth, transition:{duration:0.1}}} className={style.container}>
        <div className={style.picture} onTouchStart={touchStartHandle} onTouchEnd={touchEndHandle}>
            <IngredientComponent timer={timer} picture={'/ingredient_pic.png'}/>
        </div>
        <div className={style.ingredient}>свиная вырезка</div>
        <div className={style.votebar}>
            <ApprovePicture picture={'/disapprove.png'} onClick={disapproveFunc}/>
            <ApprovePicture picture={'/approve.png'} onClick={approveFunc}/>
        </div>
    </motion.div>;
};

export default SoloInGamePage;
