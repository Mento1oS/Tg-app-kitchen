/** @format */
import style from './DishPicture.module.css'
const DishPicture = (props:{picture: string}) => {
  return <div className={style.conatiner}>
    <img className={style.image} src={props.picture} alt="dish"/>
  </div>;
};

export default DishPicture;
