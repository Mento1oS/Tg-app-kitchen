/** @format */
import style from './IngredientComponent.module.css'
const IngredientComponent = (props:{picture: string}) => {
  return <div className={style.container}>
    <img src={props.picture} alt="ingredient"/>
  </div>;
};

export default IngredientComponent;
