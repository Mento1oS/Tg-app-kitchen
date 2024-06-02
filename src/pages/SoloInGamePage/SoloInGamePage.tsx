/** @format */
// import {Params, useParams} from "react-router-dom";
import style from './SoloIngamePage.module.css'
import IngredientComponent from "../IngredientComponent/IngredientComponent.tsx";
import ApprovePicture from "../ApprovePicture/ApprovePicture.tsx";
import {Dispatch, SetStateAction} from "react";
import {Params, useNavigate, useParams} from "react-router-dom";

const SoloInGamePage = (props: {
    answers: NonNullable<unknown>, setAnswers:Dispatch<SetStateAction<NonNullable<unknown>>>
}) => {
    const params: Readonly<Params<string>> = useParams();
    const navigate = useNavigate();
    const stage = params?.stage;
    if(!stage) return;
    const onClick = (approved: boolean, answers: NonNullable<unknown>, setAnswers:Dispatch<SetStateAction<NonNullable<unknown>>>, stage:string) => {
        setAnswers({...answers, [stage]: approved});
        navigate(`/solo/game/${Number(stage)+1}`)
    }
    const disapproveFunc = onClick.bind(null, false, props.answers, props.setAnswers, stage);
    const approveFunc = onClick.bind(null, true, props.answers, props.setAnswers, stage);
    return <div className={style.container}>
        <div className={style.picture}>
            <IngredientComponent picture={'/ingredient_pic.png'}/>
        </div>
        <div className={style.ingredient}>свиная вырезка</div>
        <div className={style.votebar}>
            <ApprovePicture picture={'/disapprove.png'} onClick={disapproveFunc}/>
            <ApprovePicture picture={'/approve.png'} onClick={approveFunc}/>
        </div>
    </div>;
};

export default SoloInGamePage;
