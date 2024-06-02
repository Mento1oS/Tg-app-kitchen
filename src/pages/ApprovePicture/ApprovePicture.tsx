/** @format */
import style from './ApprovePicture.module.css'
const ApprovePicture = (props:{picture:string, onClick: () => void}) => {
  return <div onClick={props.onClick} className={style.container}>
    <img src={props.picture} alt="vote"/>
  </div>;
};

export default ApprovePicture;
