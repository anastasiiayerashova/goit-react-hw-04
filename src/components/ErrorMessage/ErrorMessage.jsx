import s from './ErrorMessage.module.css';
import { ImSad } from "react-icons/im";

export default function ErrorMessage() {
    return (
        <p className={s.text}>Request failed, something went wrong...<ImSad size={24}/></p>
    )
}
