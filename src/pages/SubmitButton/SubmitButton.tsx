/** @format */
import {Link} from "react-router-dom";
import style from './SubmitButton.module.css'
const SubmitButton = (props:{address:string, text:string}) => {
  return <div className={style.wrapper}>
    <Link className={style.text} to={props.address}>{props.text}</Link>
  </div>;
};

export default SubmitButton;
