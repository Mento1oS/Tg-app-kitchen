/** @format */
// import {Params, useParams} from "react-router-dom";
import style from './SoloIngamePage.module.css'
import IngredientComponent from "../IngredientComponent/IngredientComponent.tsx";
import ApprovePicture from "../ApprovePicture/ApprovePicture.tsx";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {Params, useNavigate, useParams} from "react-router-dom";

const SoloInGamePage = (props: {
    answers: NonNullable<unknown>, setAnswers:Dispatch<SetStateAction<NonNullable<unknown>>>
}) => {
    const params: Readonly<Params<string>> = useParams();
    const navigate = useNavigate();
    const [timer, setTimer]:[number, Dispatch<SetStateAction<number>>] = useState(30)
    const stage = params?.stage;
    const interval = useRef(0);
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
        setTimer(30);
        navigate(`/solo/game/${Number(stage)+1}`)
    }
    const disapproveFunc = onClick.bind(null, false, props.answers, props.setAnswers, stage);
    const approveFunc = onClick.bind(null, true, props.answers, props.setAnswers, stage);

    return <div className={style.container}>
        <div className={style.picture}>
            <IngredientComponent timer={timer} picture={'/ingredient_pic.png'}/>
        </div>
        <div className={style.ingredient}>свиная вырезка</div>
        <div className={style.votebar}>
            <ApprovePicture picture={'/disapprove.png'} onClick={disapproveFunc}/>
            <ApprovePicture picture={'/approve.png'} onClick={approveFunc}/>
        </div>
    </div>;
};

export default SoloInGamePage;
