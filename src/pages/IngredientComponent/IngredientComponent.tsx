/** @format */
import style from './IngredientComponent.module.css'

const IngredientComponent = (props: { picture: string, timer: number }) => {
    return <div className={style.container}>
        <img src={props.picture} alt="ingredient"/>
        <div className={style.counter}>
            <div className={style.text}>{props.timer}</div>
        </div>
    </div>;
};

export default IngredientComponent;
